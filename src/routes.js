import React, { memo, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Login from "./pages/login";
import { LoginContext } from "./context/loginContex";
import Navbar from "./components/navbar";
import AddPost from "./pages/addPost";
import { Container } from "@mui/material";
import Post from "./pages/post";

const AppRoutes = memo(() => {
  const { loggedIn } = useContext(LoginContext);
  console.log(loggedIn);
  return (
    <>
      {loggedIn.loggedIn ? (
        <>
          <Navbar />
          <div className="div" style={{ backgroundColor: "#E0E0E0" }}>
            <Container sx={{ backgroundColor: "#FAFAFA", minHeight: "100vh" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/addpost" element={<AddPost />} />
                <Route path="/*" element={<Navigate to="/" />} />
                <Route path="post/:id" element={<Post />} />
              </Routes>
            </Container>
          </div>
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
    </>
  );
});

export default AppRoutes;
