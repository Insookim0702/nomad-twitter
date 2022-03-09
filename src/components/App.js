import { useEffect, useState } from "react";
import { authService } from "fbase";
import AppRouter from "../routes/Router";
import "assets/init.css";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
    const [init, setInit] = useState(false);
    const [user, setUser] = useState(null);
    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                setIsLoggedIn(true);
                setUser(user);
            } else {
                setIsLoggedIn(false);
            }
            setInit(true);
        });
    }, []);
    return (
        <div className="App">
            {init ? (
                <AppRouter isLoggedIn={isLoggedIn} user={user} />
            ) : (
                "loading..."
            )}
        </div>
    );
}

export default App;
