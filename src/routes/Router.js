import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "routes/SignUp";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "../components/Navigation";

export default function AppRouter({ isLoggedIn, user }) {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Routes>
                {isLoggedIn ? (
                    <>
                        <Route
                            exact
                            path="/"
                            element={<Home user={user} />}
                        ></Route>
                        <Route
                            exact
                            path="/profile"
                            element={<Profile />}
                        ></Route>
                    </>
                ) : (
                    <>
                        <Route exact path="/" element={<Auth />}></Route>
                        <Route
                            exact
                            path="/signup"
                            element={<SignUp />}
                        ></Route>
                    </>
                )}
            </Routes>
        </Router>
    );
}
