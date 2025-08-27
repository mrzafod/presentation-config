import { useEffect, useState } from 'react';

export function useLocalStorage<T = string>(key: string, defaultValue?: T) {
  const [value, setValue] = useState<T | undefined>(() => {
    if (typeof window === 'undefined') return defaultValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : defaultValue;
    } catch (err) {
      console.warn(`useLocalStorage: error parsing ${key}`, err);
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.warn(`useLocalStorage: error saving ${key}`, err);
    }
  }, [key, value]);

  return [value, setValue] as const;
}
