import { authService } from "fbase";
import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function onChange(event) {
        const { value, name } = event.target;
        if (name === "email") {
            setEmail(value);
        } else {
            setPassword(value);
        }
    }
    async function onSubmit(event) {
        event.preventDefault();
        // login
        try {
            const res = await authService.signInWithEmailAndPassword(
                email,
                password
            );
        } catch (err) {
            alert(err.message);
        }
    }
    return (
        <>
            <div>Auth</div>
            <form onSubmit={onSubmit}>
                <input
                    name="email"
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={onChange}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={onChange}
                />
                <input type="submit" name="login" />
            </form>
            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>
            <Link to="/signup">회원가입</Link>
        </>
    );
}
