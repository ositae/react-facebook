import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/news.module.css";
import NewsUpdate from "../newsUpdate";
import Avatar from "../avatar";

// data
const newsArray = [
  { username: "User1", content: "This is an awesome blog!" },
  { username: "User2", content: "I like summertime! Weather is great!" },
  { username: "User3", content: "Pizza > Hotdog" },
  { username: "User4", content: "Check out my first post!" },
];

export default function News() {
  const displayNewsArray = newsArray.map((news, idx) => {
    return (
      <NewsUpdate username={news.username} content={news.content} key={idx} />
    );
  });

  return (
    <div >
      <div >
        <Link href="/">Return Home</Link>
        <Link href="/email/inbox">Message inbox</Link>
      </div>
      <div className={styles.grid}>{displayNewsArray}</div>
    </div>
  );
}
