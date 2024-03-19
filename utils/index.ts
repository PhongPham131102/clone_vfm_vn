import { useEffect, useState } from "react";

export const useServerClientCheck = () => {
  const [isServer, setIsServer] = useState(true); // Default to true for server-side rendering

  useEffect(() => {
    setIsServer(typeof window === "undefined");
  }, []);

  return isServer;
};
