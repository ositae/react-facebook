import Head from 'next/head';
import styles from '../../styles/games.module.css';
import Link from 'next/link';
// import Image from 'next/image';

export default function Games() { // exporting the function Home
  return (
    <div className={styles.container}>
      <Head>
        <title>"put text here'</title>
        <link rel="icon" href="/favicon.ico" />
        <Link href="/">Return Home</Link>

      </Head>

      <main>
        <h1 className={styles.title}>
         "put text here"
        </h1>

        {/* <Image src='/engineer.png' alt='engineer' width='200' height='200'/> */}

        <p className={styles.description}>
          "put text here"
        </p>

        <div className={styles.grid}>
          <Link href="/posts/first-post" className={styles.card}>
            <h3>"put text here" &rarr;</h3>
            <p>"put text here"</p>
          </Link>

          <Link href="/posts/second-post" className={styles.card}>
            <h3>"put text here" &rarr;</h3>
            <p>"put text here"</p>
          </Link>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h3>"put text here" &rarr;</h3>
            <p>"put text here"</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>"put text here" &rarr;</h3>
            <p>
              "put text here"
            </p>
          </a>
        </div>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
