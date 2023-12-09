import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Menu.module.css';
import { BsHouse, BsShop, BsPeople } from 'react-icons/bs';
import { FaGamepad, FaBell } from 'react-icons/fa6';
import { CgMenuGridO, CgProfile } from 'react-icons/cg';
import { AiFillMessage } from 'react-icons/ai';
function Menu() {
	return (
		<div className={styles.navContainer}>
			<div>
				<Link href="/">
					<Image src="/facebook-icon.png" width="30" height="30"></Image>
				</Link>
				<input type="text" placeholder="Search Facebook" />
			</div>
			<div className={styles.navIconsMiddle}>
				<Link href="/">
					<BsHouse size={30} color="black" />
				</Link>
				<Link href="/">
					<BsShop size={30} color="black" />
				</Link>
				<Link href="/">
					<BsPeople size={30} color="black" />
				</Link>
				<Link href="/gaming">
					<FaGamepad size={30} color="black" />
				</Link>
			</div>

			<div className={styles.navIconsRight}>
				<Link href="#" className={styles.greyBackgroundIcons}>
					<CgMenuGridO size={20} color="black" />
				</Link>
				<Link href="/messages" className={styles.greyBackgroundIcons}>
					<AiFillMessage size={20} color="black" />
				</Link>
				<Link href="/notifications" className={styles.greyBackgroundIcons}>
					<FaBell size={20} color="black" />
				</Link>
				<Link href="#" className={styles.greyBackgroundIcons}>
					<CgProfile size={30} color="black" />
				</Link>
			</div>
		</div>
	);
}

export default Menu;