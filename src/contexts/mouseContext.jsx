import { createContext, useState } from "react";

export const mouseContext = createContext();

export function MouseProvider({ children }) {
  const [hoverable, setHoverable] = useState(false);

  return (
    <mouseContext.Provider value={[hoverable, setHoverable]}>
      {children}
    </mouseContext.Provider>
  );
}
