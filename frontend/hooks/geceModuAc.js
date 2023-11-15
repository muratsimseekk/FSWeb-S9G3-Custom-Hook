import { useState } from "react";
import useLocalStorageKullan from "./localStorageKullan";

const useGeceModuAc = () => {
  const [geceModu, setGeceModu] = useLocalStorageKullan("geceModu", false);
  // const [geceModu, setGeceModu] = useState(false);

  const toggleMode = (e) => {
    e.preventDefault();
    setGeceModu(!geceModu);
  };

  return [geceModu, toggleMode];
};

export default useGeceModuAc;
