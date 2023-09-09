import { createContext, useState } from "react";

const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
  const [page, setPage] = useState(0);
  const [small, setSmall] = useState(false);

  return (
    <RouteContext.Provider
      value={{
        page,
        small,
        setPage,
        setSmall,
      }}
    >
      {children}
    </RouteContext.Provider>
  );
};

export default RouteContext;
