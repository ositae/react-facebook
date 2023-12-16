import React from 'react';
import Menu from '../menu';
import Sidebar from './sidebar';
import styles from '../../styles/Settings.module.css';
import { AiFillLock } from 'react-icons/ai';
import { FaUserTimes, FaLightbulb } from 'react-icons/fa';
import { LuArrowRight } from 'react-icons/lu';
import { MdEditNote } from 'react-icons/md';
import { RiPagesFill } from 'react-icons/ri';

function Settings() {
	return (
		<div>
			<Menu />
			<div className={styles.container}>
				<Sidebar />
				<div className={styles.settingsContainer}>
					<div className={styles.settingsInfo}>
						<h3>Find the settings you need</h3>
						<input
							type="text"
							placeholder="Search settings"
							className={styles.searchBar}
						/>

						<h3>Most visited settings</h3>
						<div className={styles.mostVisited}>
							<div className={styles.mostVisitedCard}>
								<FaUserTimes size={40} className={styles.mostVisitedCardIcon} />
								<h4>Blocking</h4>
								<p>
									Review people you've previously blocked or add someone to your
									blocked list
								</p>
							</div>

							<div className={styles.mostVisitedCard}>
								<MdEditNote size={40} className={styles.mostVisitedCardIcon} />
								<h4>Activity log</h4>
								<p>View and manage your activity on Facebook.</p>
							</div>

							<div className={styles.mostVisitedCard}>
								<FaLightbulb
									size={40}
									color="yellow"
									className={styles.mostVisitedCardIcon}
								/>
								<h4>Dark mode</h4>
								<p>Choose if you want to use dark mode.</p>
							</div>
						</div>

						<h3>Looking for something else?</h3>
						<div>
							<div className={styles.settingsLongCard}>
								<AiFillLock size={50} />
								<div className={styles.settingsLongCardText}>
									<h4>Privacy Center</h4>
									<p>
										Learn how to manage and control your privacy across Meta
										products.
									</p>
								</div>
								<LuArrowRight size={20} color="gray" />
							</div>
							<div className={styles.settingsLongCard}>
								<RiPagesFill size={50} />
								<div className={styles.settingsLongCardText}>
									<h4>Facebook Help Center</h4>
									<p>
										Learn how to manage and control your privacy across Meta
										products.
									</p>
								</div>
								<LuArrowRight size={20} color="gray" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Settings;
