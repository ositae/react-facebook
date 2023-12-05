import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Inbox.module.css';
import Message from '../message';
import Avatar from '../avatar';

// data
// const engineersArray = [
//     { username: '@Keya-Moradi', message: 'Terzi'},
//     { username: '@ltcervan', message: 'Community'},
//     { username: '@JordanJNelson', message: 'Breaking Bad'},
//     { username: '@abbyog27', message: 'The Crown'},
//     { username: '@Nimsey', message: 'Blue Eye Samurai'},
//     { username: '@dfloresca', message: 'Dancing With The Stars'},
//     { username: '@gongt108', message: 'Avatar the Last Airbender'},
//     { username: '@soyrvelez', message: 'The Curse'},
//     { username: '@DougAlex32', message: 'Breaking Bad'},
//     { username: '@ositae', message: 'Friday'},
//     { username: '@mike-gustafson', message: 'Monarch Legacy of Monsters'},
//     { username: '@DonEvans63', message: 'Valhalla'},
//     { username: '@DGWonKanobi', message: 'Money Heist'},
//     { username: '@romebell', message: 'Peaky Blinders', image: 'https://ca.slack-edge.com/T0351JZQ0-U0166E8MHJT-a00fa1232131-512'},
//     { username: '@avisa-ga', message: 'New Amsterdam'},
// ]

const engineersArray = [
    { username: '@Keya-Moradi', message: 'My favorite vacation spot is Paris!'},
    { username: '@ltcervan', message: 'Thats nice! I think Milan takes it tho!'},
    { username: '@JordanJNelson', message: 'I like L.A. Always summer vibes!'},
    { username: '@abbyog27', message: 'Have you ever been to Fiji Islands?'},
    { username: '@Nimsey', message: 'Oh, I wanna go! I have been to Iceland!'},
    { username: '@dfloresca', message: 'I would like to visit Maine. Seafood galore!'},
    { username: '@gongt108', message: 'Seafood and moose! Just like Canada.'},
    { username: '@soyrvelez', message: 'I like big cities like New York or Miami!'},
    { username: '@DougAlex32', message: 'Yeah expecially big cities outside America like Lagos, Nigeria.'},
    { username: '@ositae', message: 'Good pick! Ive always wanted to visit Tokyo.'},
    { username: '@mike-gustafson', message: 'Hawaii baby! Hawaii baby!!'},
    { username: '@DonEvans63', message: 'Hawaii or Florida! Either works as long as its plenty of sunlight'},
    { username: '@DGWonKanobi', message: 'Good picks. Ill check out Dubai. So much activities!'},
    { username: '@romebell', message: 'Lots of vacation destinations to pick from!', image: 'https://ca.slack-edge.com/T0351JZQ0-U0166E8MHJT-a00fa1232131-512'},
    { username: '@avisa-ga', message: 'Amsterdam!!!'},
]


export default function Inbox() {
    const displayEngineersArray = engineersArray.map((engineer, idx) => {
        return <Message image={<Avatar />} username={engineer.username} message={engineer.message} key={idx} />
    });

    return (
        <div className={styles.container}>
            <h1>Vacation Destination Discussion</h1>
            
            <div className={styles.grid}>
                {displayEngineersArray}
            </div>

            <Link href="/">Return Home</Link>
        </div>
    )
}