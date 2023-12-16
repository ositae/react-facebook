import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import RandomUpdates from './update';
import Menu from './menu';
import NewsFeed from './newsfeed';
import Sidebar from './sidebar';

import { CgMenuGridO, CgProfile } from 'react-icons/cg';

export default function Home() {
	// exporting the function Home
	return (
		<div>
			<Head>
				<title>Facebook</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.navContainer}>
				<Menu />
			</div>
			<div className={styles.mainContainer}>
				<Sidebar />
				<div className={styles.container}>
					<div className={styles.grid}>
						<div className={styles.statusContainer}>
							<div className={styles.statusInput}>
								<CgProfile size={30} color="black" />
								<input type="text" placeholder="What's on your mind?" />
							</div>
							<div className={styles.statusLinks}>
								<div>
									<p>Live video</p>
								</div>
								<div>
									<p>Photo/video</p>
								</div>
								<div>
									<p>Feeling/activity</p>
								</div>
							</div>
						</div>
						<div className={styles.newsfeed}>
							<h2>NewsFeed </h2>
							<NewsFeed />
						</div>

						<div className={styles.card}>
							<h3>Random Updates </h3>
							<RandomUpdates />
						</div>
					</div>
				</div>
			</div>

			<footer>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<img src="/vercel.svg" alt="Vercel" className={styles.logo} />
				</a>
			</footer>

			<style jsx>{`
				main {
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
					font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
						DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
				}
			`}</style>

			<style jsx global>{`
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
						Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
						sans-serif;
				}
				* {
					box-sizing: border-box;
				}
			`}</style>
		</div>
	);
}
