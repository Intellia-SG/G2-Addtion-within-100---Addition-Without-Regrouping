import { useState, useEffect } from 'react';

const TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (!item) return initialValue;
      const parsed = JSON.parse(item);
      // Check TTL
      if (parsed._expires && Date.now() > parsed._expires) {
        window.localStorage.removeItem(key);
        return initialValue;
      }
      return parsed.value ?? initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify({
        value: valueToStore,
        _expires: Date.now() + TTL_MS,
      }));
    } catch (err) {
      console.error('useLocalStorage set error:', err);
    }
  };

  const removeValue = () => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch { /* ignore */ }
  };

  return [storedValue, setValue, removeValue];
}
