import { useState } from "react";
import { authService } from "fbase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function onChange(event) {
        const { name, value } = event.target;
        if (name === "email") {
            setEmail(value);
        } else {
            setPassword(value);
        }
    }
    async function onSubmit(event) {
        event.preventDefault();
        try {
            await createUserWithEmailAndPassword(authService, email, password);
        } catch (err) {
            alert(err.message);
        }
    }
    return (
        <>
            <h1>회원가입</h1>
            <form onSubmit={onSubmit}>
                <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={onChange}
                />
                <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={onChange}
                />
                <input name="" type="submit" />
            </form>
        </>
    );
}
