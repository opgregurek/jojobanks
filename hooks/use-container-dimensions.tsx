'use client';
import { useEffect, useState } from "react";

export const useContainerDimensions = (id: string) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  
    useEffect(() => {
      const getDimensions = () => {
        const component = document.querySelector(`#${id}`);
        return {
            width: component?.clientWidth ?? 0,
            height: component?.clientHeight ?? 0,
        }
      }
  
      const handleResize = () => {
        setDimensions(getDimensions())
      }
  
      setDimensions(getDimensions())
  
      window.addEventListener("resize", handleResize)
  
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }, [id])
  
    return dimensions;
  };