"use client";

import { useEffect, useState } from "react";

interface GitHubStats {
  stars: number;
  forks: number;
}

const cache = new Map<string, GitHubStats>();

export function useGitHubStats(repo: string) {
  const [stats, setStats] = useState<GitHubStats | null>(
    () => cache.get(repo) ?? null,
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    if (cache.has(repo)) {
      return;
    }

    fetch(`https://api.github.com/repos/${repo}`)
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (!data || cancelled) return;
        const result: GitHubStats = {
          stars: data.stargazers_count,
          forks: data.forks_count,
        };
        cache.set(repo, result);
        setStats(result);
      })
      .catch((err: Error) => {
        if (!cancelled) setError(err.message);
      });

    return () => {
      cancelled = true;
    };
  }, [repo]);

  return { stats, isLoading: stats === null && error === null, error };
}
