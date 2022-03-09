import { useState } from "react";
import { authService } from "fbase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    function onChange(event) {
        const { name, value } = event.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        } else {
            setDisplayName(value);
        }
    }
    async function onSubmit(event) {
        event.preventDefault();
        try {
            await createUserWithEmailAndPassword(
                authService,
                email,
                password
            ).then((user) => {
                updateProfile(user.user, {
                    displayName: displayName,
                });
            });
        } catch (err) {
            alert(err.message);
        }
    }
    return (
        <>
            <h1>회원가입</h1>
            <form onSubmit={onSubmit}>
                <label>이메일: </label>
                <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={onChange}
                />

                <label>비밀번호: </label>
                <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={onChange}
                />
                <label>이름: </label>
                <input
                    name="displayName"
                    type="text"
                    value={displayName}
                    onChange={onChange}
                />
                <input name="" type="submit" />
            </form>
        </>
    );
}
