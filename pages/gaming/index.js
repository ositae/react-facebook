import React from 'react';
import Menu from '../menu';
import {
	FaGear,
	FaGamepad,
	FaBell,
	FaBookmark,
	FaChess,
} from 'react-icons/fa6';
import { IoGameController } from 'react-icons/io5';
import { GiCardAceSpades, GiRollingDices } from 'react-icons/gi';
import { PiFlagPennantFill, PiSword } from 'react-icons/pi';
import { RiMap2Fill } from 'react-icons/ri';
import { SiApplearcade } from 'react-icons/si';
import { MdCastle } from 'react-icons/md';
import styles from '../../styles/sidebar.module.css';
import gamingStyles from '../../styles/games.module.css';
import gamesWeLove from '../../public/data/gamesWeLove';
import SmallGameCard from '../components/small-game-card';
import Sidebar from '../components/sidebar';

import Link from 'next/link';
function Index() {
	return (
		<div>
			<Menu />
			<div className={gamingStyles.contentBody}>
				<div>
					<Sidebar />
				</div>

				<div>
					<h2>Games We Love</h2>
					<div></div>
					<SmallGameCard />
				</div>
			</div>
		</div>
	);
}

export default Index;