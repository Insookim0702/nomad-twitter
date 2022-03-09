import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { dbService } from "fbase";
import TweetList from "components/TweetList";
export default function Home({ user }) {
    const [tweet, setTweet] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        const date = `${new Date().getFullYear()}년 ${
            new Date().getMonth() + 1
        }월 ${new Date().getDate()}일`;
        await addDoc(collection(dbService, "tweet"), {
            tweet: tweet,
            createdAt: date,
            user: {
                photoURL: user.photoURL,
                email: user.email,
                displayName: user.displayName,
            },
        });
    };
    const onChange = (event) => {
        setTweet(event.target.value);
    };
    return (
        <div className="home">
            <form onSubmit={onSubmit}>
                <input
                    name=""
                    type="text"
                    placeholder="What's on your mind?"
                    required
                    maxLength={120}
                    value={tweet}
                    onChange={onChange}
                />
                <input name="" type="submit" onChange={onChange} />
            </form>
            <TweetList />
            <button className="tweet-btn">트윗</button>
        </div>
    );
}
