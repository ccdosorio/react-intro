import { useState, useEffect } from 'react';

// custom hook local storage
function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState(initialValue);
  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let paredItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          paredItem = initialValue;
        } else {
          paredItem = JSON.parse(localStorageItem);
        }

        setItem(paredItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 3000);
  });

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError();
    }
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };
