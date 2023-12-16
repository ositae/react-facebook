import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Gaming.module.css';

function LargeGameCard({ img, name, playersNum }) {
	return (
		<div className={styles.largeGameCard}>
			<Image src={img} width="150" height="300"></Image>
			<div className={styles.gameCardDetails}>
				<h4>{name}</h4>
				<p className={styles.gameCardPlayers}>{playersNum}</p>
			</div>
		</div>
	);
}

export default LargeGameCard;
