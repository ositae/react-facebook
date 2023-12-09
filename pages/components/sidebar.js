import React from 'react';
import styles from '../../styles/Sidebar.module.css';
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
import Link from 'next/link';

function Sidebar() {
	return (
		<div className={styles.sideBarContainer}>
			<div className={styles.sideBarHeader}>
				<h2>Gaming</h2>
				<div className={styles.greyBackgroundIcons}>
					<FaGear />
				</div>
			</div>
			<input
				type="text"
				placeholder="Search gaming"
				className={styles.searchBar}
			/>
			<div className={styles.sideBarListItem}>
				<div className={styles.greyBackgroundIconsActive}>
					<FaGamepad size={20} color="white" />
				</div>
				<h4>Play Games</h4>
			</div>
			<div className={styles.sideBarListItem}>
				<div className={styles.greyBackgroundIcons}>
					<FaBell size={20} color="black" />
				</div>
				<h4>Notifications</h4>
			</div>
			<div className={styles.gamesSection}>
				<div className={styles.saveGamesSectionHeader}>
					<h4>Your Games</h4>
					<Link href="#">See all</Link>
				</div>
				<p>Save a game to Your games to create a shortcut for it here.</p>
				<div className={styles.sideBarListItem}>
					<div className={styles.greyBackgroundIcons}>
						<FaBookmark size={20} color="black" />
					</div>
					<h4>Save games</h4>
				</div>
			</div>
			<div className={styles.gamesCategoriesSection}>
				<h4>Categories</h4>

				<div className={styles.sideBarListItem}>
					<div className={styles.greyBackgroundIcons}>
						<IoGameController size={20} color="black" />
					</div>
					<h4>All games</h4>
				</div>
				<div className={styles.sideBarListItem}>
					<div className={styles.greyBackgroundIcons}>
						<PiFlagPennantFill size={20} color="black" />
					</div>
					<h4>Action</h4>
				</div>
				<div className={styles.sideBarListItem}>
					<div className={styles.greyBackgroundIcons}>
						<RiMap2Fill size={20} color="black" />
					</div>
					<h4>Adventure</h4>
				</div>
				<div className={styles.sideBarListItem}>
					<div className={styles.greyBackgroundIcons}>
						<SiApplearcade size={20} color="black" />
					</div>
					<h4>Arcade</h4>
				</div>
				<div className={styles.sideBarListItem}>
					<div className={styles.greyBackgroundIcons}>
						<PiSword size={20} color="black" />
					</div>
					<h4>Battle</h4>
				</div>
				<div className={styles.sideBarListItem}>
					<div className={styles.greyBackgroundIcons}>
						<FaChess size={20} color="black" />
					</div>
					<h4>Board</h4>
				</div>
				<div className={styles.sideBarListItem}>
					<div className={styles.greyBackgroundIcons}>
						<MdCastle size={20} color="black" />
					</div>
					<h4>Builder</h4>
				</div>
				<div className={styles.sideBarListItem}>
					<div className={styles.greyBackgroundIcons}>
						<GiCardAceSpades size={20} color="black" />
					</div>
					<h4>Card</h4>
				</div>
				<div className={styles.sideBarListItem}>
					<div className={styles.greyBackgroundIcons}>
						<GiRollingDices size={20} color="black" />
					</div>
					<h4>Casino</h4>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;