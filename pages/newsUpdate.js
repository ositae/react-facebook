import styles from '../styles/Inbox.module.css';

export default function NewsUpdate({ username, content }) {
    return (
        <div className={styles.card}>
            <h3>{username}</h3>
            <h5>{content}</h5>
        </div>
    )
}