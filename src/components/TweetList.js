import { collection, getDocs } from "firebase/firestore";
import { dbService } from "fbase";
import { useEffect, useState } from "react";
import "components/Style.css";

const TweetList = () => {
    const [tweets, setTweets] = useState([]);
    const querySnapshot = async () => {
        const { docs } = await getDocs(collection(dbService, "tweet"));
        const tweets = docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data(),
            };
        });
        setTweets(tweets);
    };

    useEffect(() => {
        querySnapshot();
    }, []);

    return (
        <>
            <ul>
                {tweets.length === 0 ? (
                    <p className="tweets-empty">트윗이 없어요.</p>
                ) : (
                    tweets.map((tweet) => {
                        return (
                            <li key={tweet.id} className="tweet">
                                <img className="profile-img" />
                                <div className="tweet-info">
                                    <div className="profile-info">
                                        <p className="name">
                                            {tweet.user.displayName}
                                        </p>
                                        <p className="date">
                                            {" "}
                                            {tweet.createdAt}
                                        </p>
                                    </div>
                                    {tweet.tweet}
                                </div>
                            </li>
                        );
                    })
                )}
            </ul>
        </>
    );
};

export default TweetList;
