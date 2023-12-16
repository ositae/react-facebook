import React from 'react';
import styles from '../styles/Sidebar.module.css';
import { CgMenuGridO, CgProfile } from 'react-icons/cg';
import { BsHouse, BsShop, BsPeople } from 'react-icons/bs';

import {
	FaGear,
	FaGamepad,
	FaBell,
	FaBookmark,
	FaMeta,
	FaCalendarCheck,
	FaChevronDown,
} from 'react-icons/fa6';
import { IoGameController, IoStatsChart } from 'react-icons/io5';
import { GrGroup } from 'react-icons/gr';
import { RiMap2Fill, RiMemoriesFill } from 'react-icons/ri';
import { MdCastle, MdOutlineOndemandVideo } from 'react-icons/md';
import { VscFeedback } from 'react-icons/vsc';
import Link from 'next/link';

function Sidebar() {
	return (
		<div className={styles.sideBarContainer}>
			<div className={styles.sideBarListItem}>
				<div className={styles.greyBackgroundIconsActive}>
					<CgProfile size={20} color="white" />
				</div>
				<h4>User</h4>
			</div>
			<div className={styles.sideBarListItem}>
				<div className={styles.greyBackgroundIcons}>
					<BsPeople size={20} color="black" />
				</div>
				<h4>Friends</h4>
			</div>

			<div className={styles.sideBarListItem}>
				<div className={styles.greyBackgroundIcons}>
					<RiMemoriesFill size={20} color="black" />
				</div>
				<h4>Memories</h4>
			</div>

			<div className={styles.sideBarListItem}>
				<div className={styles.greyBackgroundIcons}>
					<FaBookmark size={20} color="black" />
				</div>
				<h4>Saved</h4>
			</div>

			<div className={styles.sideBarListItem}>
				<div className={styles.greyBackgroundIcons}>
					<GrGroup size={20} color="black" />
				</div>
				<h4>Groups</h4>
			</div>

			<div className={styles.sideBarListItem}>
				<div className={styles.greyBackgroundIcons}>
					<MdOutlineOndemandVideo size={20} color="black" />
				</div>
				<h4>Video</h4>
			</div>

			<div className={styles.sideBarListItem}>
				<div className={styles.greyBackgroundIcons}>
					<BsShop size={20} color="black" />
				</div>
				<h4>Marketplace</h4>
			</div>
			<div className={styles.sideBarListItem}>
				<div className={styles.greyBackgroundIcons}>
					<VscFeedback size={20} color="black" />
				</div>
				<h4>Feeds</h4>
			</div>
			<div className={styles.sideBarListItem}>
				<div className={styles.greyBackgroundIcons}>
					<FaCalendarCheck size={20} color="black" />
				</div>
				<h4>Events</h4>
			</div>
			<div className={styles.sideBarListItem}>
				<div className={styles.greyBackgroundIcons}>
					<IoStatsChart size={20} color="black" />
				</div>
				<h4>Ads Manager</h4>
			</div>
			<div className={styles.sideBarListItem}>
				<div className={styles.greyBackgroundIcons}>
					<FaMeta size={20} color="black" />
				</div>
				<h4>Meta Quest</h4>
			</div>
			<div className={styles.sideBarListItem}>
				<div className={styles.greyBackgroundIcons}>
					<FaChevronDown size={20} color="black" />
				</div>
				<h4>See more</h4>
			</div>
		</div>
	);
}

export default Sidebar;
