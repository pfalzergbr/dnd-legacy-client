import {useState} from 'react';

export const useShowPassword = (initial: boolean = false) => {
  const [isVisible, setIsVisible] = useState(initial)

  const toggleVisible = () => {
    setIsVisible(!isVisible)
  }

  return {isVisible, toggleVisible}
}