import React, { createContext, useState } from "react";

export const LoadingAccessContext = createContext();

export const LoadingAccessProvider = ({ children }) => {
  const [canAccessLoading, setCanAccessLoading] = useState(false);

  const grantLoadingAccess = () => {
    setCanAccessLoading(true);
  };

  const revokeLoadingAccess = () => {
    setCanAccessLoading(false);
  };

  return (
    <LoadingAccessContext.Provider
      value={{ canAccessLoading, grantLoadingAccess, revokeLoadingAccess }}
    >
      {children}
    </LoadingAccessContext.Provider>
  );
};
