"use client";

import { useEffect, useState } from "react";

interface GitHubStats {
  stars: number;
  forks: number;
}

const cache = new Map<string, GitHubStats>();

export function useGitHubStats(repo: string) {
  const [stats, setStats] = useState<GitHubStats | null>(
    cache.get(repo) ?? null
  );

  useEffect(() => {
    if (cache.has(repo)) {
      setStats(cache.get(repo)!);
      return;
    }

    fetch(`https://api.github.com/repos/${repo}`)
      .then((res) => {
        if (!res.ok) return null;
        return res.json();
      })
      .then((data) => {
        if (!data) return;
        const result: GitHubStats = {
          stars: data.stargazers_count,
          forks: data.forks_count,
        };
        cache.set(repo, result);
        setStats(result);
      })
      .catch(() => {});
  }, [repo]);

  return stats;
}
