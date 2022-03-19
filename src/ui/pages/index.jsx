import { useIndex } from "../../data/hooks/pages/useIndex.page.js";
import TextInput from "../components/inputs/TextInput/TextInput";
import Tweet from "../components/Tweet/Tweet";
import styles from "../styles/pages/index.module.css";

const tweet = {
  date: "há 2 dias",
  text: "que sono",
  user: {
    name: "Matheus Gorga",
    username: "@matheusGorga",
    picture: "https://github.com/MatheusGorga.png",
  },
};

export default function Index() {
  const {
    user,
    text,
    onTextChange,
    maxTextLength,
    sendTweet,
    sortedTweetList,
  } = useIndex();

  return (
    <div className={styles["app-container"]}>
      <div>
        <h1 className={styles["page-tittle"]}>Treina Tweet</h1>
        <div className={styles["tweet-container"]}>
          <img src={user.picture} className={styles["avatar"]} />
          <TextInput
            placeholder={"o que esta acontecendo?"}
            rows={3}
            maxLength={maxTextLength}
            value={text}
            onChange={onTextChange}
          />
        </div>

        <div className={styles["button-container"]}>
          <div>
            {text.length} / {maxTextLength}
          </div>
          <button
            disabled={text.length === 0}
            className={styles["post-button"]}
            onClick={sendTweet}
          >
            Tweetar
          </button>
        </div>

        <ul className={styles["tweet-list"]}>
          {sortedTweetList.map((tweet) => (
            <li key={tweet.id} className={styles["tweet-list-item"]}>
              <Tweet tweet={tweet.data} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
