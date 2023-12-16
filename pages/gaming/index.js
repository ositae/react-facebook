import React from 'react';
import Menu from '../menu';

import styles from '../../styles/Gaming.module.css';
import GamingData from '../../public/data/gaming';
import SmallGameCard from '../components/small-game-card';
import LargeGameCard from '../components/large-game-card';
import Sidebar from '../components/sidebar';

import Link from 'next/link';
function Index() {
	const gamesWeLoveDisplay = GamingData.gamesWeLove.map((game, idx) => {
		return (
			<SmallGameCard
				key={idx}
				img={game.img}
				name={game.name}
				playersNum={game.playersNum}
			/>
		);
	});

	const topPicksLargeDisplay = GamingData.topPicksLarge.map((game, idx) => {
		return (
			<LargeGameCard
				key={idx}
				img={game.img}
				name={game.name}
				playersNum={game.playersNum}
			/>
		);
	});

	const topPicksSmallDisplay = GamingData.topPicksSmall.map((game, idx) => {
		return (
			<SmallGameCard
				key={idx}
				img={game.img}
				name={game.name}
				playersNum={game.playersNum}
			/>
		);
	});

	const mostPlayedLargeDisplay = GamingData.mostPlayedLarge.map((game, idx) => {
		return (
			<LargeGameCard
				key={idx}
				img={game.img}
				name={game.name}
				playersNum={game.playersNum}
			/>
		);
	});

	const mostPlayedSmallDisplay = GamingData.mostPlayedSmall.map((game, idx) => {
		return (
			<SmallGameCard
				key={idx}
				img={game.img}
				name={game.name}
				playersNum={game.playersNum}
			/>
		);
	});
	return (
		<div>
			<Menu />
			<div className={styles.contentBody}>
				<div>
					<Sidebar />
				</div>

				<div>
					<div>
						<h2>Games We Love</h2>
						<div className={styles.gamesWeLove}>{gamesWeLoveDisplay}</div>
					</div>

					<div>
						<h2>Top picks for you</h2>
						<div className={styles.topPicks}>
							{topPicksLargeDisplay}
							<div className={styles.topPicksSmall}>{topPicksSmallDisplay}</div>
						</div>
					</div>

					<div>
						<h2>Most Played</h2>
						<div className={styles.topPicks}>
							{mostPlayedLargeDisplay}
							<div className={styles.topPicksSmall}>
								{mostPlayedSmallDisplay}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Index;
