import "./App.css";
import AppRoutes from "./routes";
import { LoginProvider } from "./context/loginContex";
import { UsersProvider } from "./context/usersContext";

function App() {
  return (
    <LoginProvider>
      <UsersProvider>
        <AppRoutes />
      </UsersProvider>
    </LoginProvider>
  );
}

export default App;
