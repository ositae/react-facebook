import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/games.module.css';

function SmallGameCard() {
	return (
		<div className={styles.smallGameCard}>
			<Image src="/games/yatzy.jpg" width="150" height="150"></Image>
			<div className={styles.gameCardDetails}>
				<h4>Yatzy FRVR</h4>
				<p>172K players</p>
			</div>
		</div>
	);
}

export default SmallGameCard;