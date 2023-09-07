import { createContext, useState } from "react";

const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
  const [page, setPage] = useState(0);

  return (
    <RouteContext.Provider
      value={{
        page,
        setPage,
      }}
    >
      {children}
    </RouteContext.Provider>
  );
};

export default RouteContext;
