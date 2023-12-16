import React from 'react';
import styles from '../../styles/Sidebar.module.css';
import { BsFilePlay, BsPeople } from 'react-icons/bs';
import { CiCircleCheck, CiGlobe } from 'react-icons/ci';
import {
	FaGear,
	FaGamepad,
	FaBell,
	FaBookmark,
	FaMeta,
	FaShieldHeart,
	FaRegCreditCard,
	FaRegMoon,
} from 'react-icons/fa6';
import { ImProfile } from 'react-icons/im';
import { IoGameController, IoLockClosedOutline } from 'react-icons/io5';
import { GiCardAceSpades, GiRollingDices } from 'react-icons/gi';
import { PiFlagPennantFill, PiTelevision } from 'react-icons/pi';
import { RiMap2Fill } from 'react-icons/ri';
import { SiApplearcade } from 'react-icons/si';
import { MdOutlineAddReaction } from 'react-icons/md';
import Link from 'next/link';

function Sidebar() {
	return (
		<div className={styles.sideBarContainer}>
			<div className={styles.sideBarHeader}>
				<h2>Settings & privacy</h2>
			</div>
			<input
				type="text"
				placeholder="Search settings"
				className={styles.searchBar}
			/>
			<div className={styles.accountsCenter}>
				<div className={styles.sideBarListItem}>
					<FaMeta color="blue" />
					<h5>Meta</h5>
				</div>
				<h4>Accounts Center</h4>
				<p>
					Manage your connected experiences and account settings across Meta
					technologies.
				</p>
				<div className={styles.sideBarListItem}>
					<ImProfile />
					<p>Personal details</p>
				</div>
				<div className={styles.sideBarListItem}>
					<FaShieldHeart />
					<p>Password and security</p>
				</div>
				<div className={styles.sideBarListItem}>
					<PiTelevision />
					<p>Ad preferences</p>
				</div>
				<div className={styles.sideBarListItem}>
					<FaRegCreditCard />
					<p>Payments</p>
				</div>
				<div className={styles.sideBarListItem}>
					<CiCircleCheck />
					<p>Verification</p>
				</div>
				<Link href="#">See more in Accounts Center</Link>
			</div>

			<div className={styles.gamesSection}>
				<div className={styles.saveGamesSectionHeader}>
					<h4>Tools and resources</h4>
				</div>
				<p>Our tools help you control and manage your priv...</p>
				<div className={styles.sideBarListItem}>
					<div className={styles.greyBackgroundIcons}>
						<IoLockClosedOutline size={20} color="black" />
					</div>
					<h4>Privacy Checkup</h4>
				</div>
				<div className={styles.sideBarListItem}>
					<div className={styles.greyBackgroundIcons}>
						<BsPeople size={20} color="black" />
					</div>
					<h4>Supervision</h4>
				</div>
			</div>
			<div className={styles.gamesCategoriesSection}>
				<h4>Preferences</h4>

				<div className={styles.sideBarListItem}>
					<div className={styles.greyBackgroundIcons}>
						<MdOutlineAddReaction size={20} color="black" />
					</div>
					<h4>Reaction preferences</h4>
				</div>
				<div className={styles.sideBarListItem}>
					<div className={styles.greyBackgroundIcons}>
						<FaBell size={20} color="black" />
					</div>
					<h4>Notifications</h4>
				</div>
				<div className={styles.sideBarListItem}>
					<div className={styles.greyBackgroundIcons}>
						<CiGlobe size={20} color="black" />
					</div>
					<h4>Languages and region</h4>
				</div>
				<div className={styles.sideBarListItem}>
					<div className={styles.greyBackgroundIcons}>
						<BsFilePlay size={20} color="black" />
					</div>
					<h4>Media</h4>
				</div>
				<div className={styles.sideBarListItem}>
					<div className={styles.greyBackgroundIcons}>
						<FaRegMoon size={20} color="black" />
					</div>
					<h4>Dark mode</h4>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
