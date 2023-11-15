import { useState } from "react";

const useLocalStorageKullan = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const localValue = localStorage.getItem(key);

    if (localValue) {
      return JSON.parse(localValue);
    } else {
      return initialValue;
    }
  });
  const setLocalValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setLocalValue];
};

export default useLocalStorageKullan;
