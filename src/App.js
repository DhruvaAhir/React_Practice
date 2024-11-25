import "./App.css";
import AppRoutes from "./routes";
import { LoginProvider } from "./context/loginContex";
import { UsersProvider } from "./context/usersContext";
import { LoaderProvider } from "./context/loaderContext";

function App() {
  return (
    <LoginProvider>
      <UsersProvider>
        <LoaderProvider>
          <AppRoutes />
        </LoaderProvider>
      </UsersProvider>
    </LoginProvider>
  );
}

export default App;
