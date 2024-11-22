import { createContext, useState } from "react";

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "test 1",
      email: "test@mail.com",
      password: "123",
    },
    {
      id: 2,
      name: "test 2",
      email: "admin@mail.com",
      password: "123",
    },
  ]);

  var payload = { users, setUsers };
  return (
    <UsersContext.Provider value={payload}>{children}</UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };
