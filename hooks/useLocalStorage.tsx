import { useState } from "react";

export default function useLocalStorage(key: string, initialValue) {
  const readFromLocalStorage = () => {
    //export default function useLocalStorage<T>(
    //key: string,
    //initialValue: T
    //): [T, (value: T) => void] {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  };

  const writeToLocaStorage = (value) => {
    // const writeToLocalStorage = (value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const [storedValue, setStoredValue] = useState(readFromLocalStorage);
  //const [storedValue, setStoredValue] = useState<T>(readFromLocalStorage);

  const setValue = (value) => {
    //const setValue = (value: T) => {
    writeToLocaStorage(value);
    setStoredValue(value);
  };

  return [storedValue, setValue];
}

//commented = 🏷️ Add types to useLocalStorage commit
//linked with (*) in buttons.tsx
