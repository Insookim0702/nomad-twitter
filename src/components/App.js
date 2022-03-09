import { useEffect, useState } from "react";
import { authService } from "fbase";
import AppRouter from "./Router";
import "assets/init.css";
function App() {
    console.log(authService.currentUser);
    const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
    const [init, setInit] = useState(false);
    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setInit(true);
        });
    });
    return (
        <div className="App">
            {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "loading..."}
        </div>
    );
}

export default App;
