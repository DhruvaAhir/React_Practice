import React, { memo, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Login from "./pages/login";
import { LoginContext } from "./context/loginContex";
import Navbar from "./components/navbar";
import AddPost from "./pages/addPost";
import { Backdrop, CircularProgress, Container } from "@mui/material";
import Post from "./pages/post";
import { LoaderContext } from "./context/loaderContext";

const AppRoutes = memo(() => {
  const { showLoader } = useContext(LoaderContext);
  const { loggedIn } = useContext(LoginContext);
  return (
    <>
      {loggedIn.loggedIn ? (
        <>
          <>
            <Navbar />

            <div className="div" style={{ backgroundColor: "#E0E0E0" }}>
              <Container
                sx={{ backgroundColor: "#FAFAFA", minHeight: "100vh" }}
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/addpost" element={<AddPost />} />
                  <Route path="/*" element={<Navigate to="/" />} />
                  <Route path="post/:id" element={<Post />} />
                </Routes>
              </Container>
            </div>
          </>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Navigate to="/login" />} />
          </Routes>
        </>
      )}

      <Backdrop
        sx={(theme) => ({
          color: "#fff",
          zIndex: theme.zIndex.drawer + 1,
        })}
        open={showLoader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
});

export default AppRoutes;
