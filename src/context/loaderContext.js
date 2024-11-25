import { createContext, useState } from "react";

const LoaderContext = createContext();

const LoaderProvider = ({ children }) => {
  //   const [loggedIn, setLoggedIn] = useState({ id: 1, email: "null" });
  const [showLoader, setShowLoader] = useState(false);

  var payload = { showLoader, setShowLoader };

  return (
    <LoaderContext.Provider value={payload}>{children}</LoaderContext.Provider>
  );
};

export { LoaderContext, LoaderProvider };
