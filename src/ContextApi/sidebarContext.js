import { createContext, useState } from "react";

export const SideContext = createContext();

export const SideProvider = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const collapseSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <SideContext.Provider value={{ isCollapsed, collapseSidebar }}>
      {children}
    </SideContext.Provider>
  );
};
