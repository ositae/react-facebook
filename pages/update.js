import styles from '../styles/update.module.css'
import Link from 'next/link';
import Image from 'next/image'

export default function Update() {
  return (
    <div className={styles.update}>
      <Link href="email/inbox">
        {/* <Image src="/messenger-logo.png" alt="messages" width="40" height="40" className={styles.icon} /> */}
      </Link>
        {/* <Image src="/bell.png" alt="notifications" width="40" height="40" className={styles.icon}/> */}
    </div>
  );
}