import { createContext, useState } from "react";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  //   const [loggedIn, setLoggedIn] = useState({ id: 1, email: "null" });
  const [loggedIn, setLoggedIn] = useState({   loggedIn: false,   id: null,   email: null, });

  var payload = { loggedIn, setLoggedIn };

  return (
    <LoginContext.Provider value={payload}>{children}</LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };
