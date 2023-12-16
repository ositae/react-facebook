import React from 'react';

const updates = [
	{ username: '@Keya-Moradi', message: 'Terzi' },
	{ username: '@ltcervan', message: 'Community' },
	{ username: '@JordanJNelson', message: 'Breaking Bad' },
	{ username: '@abbyog27', message: 'The Crown' },
	{ username: '@Nimsey', message: 'Blue Eye Samurai' },
	{ username: '@dfloresca', message: 'Dancing With The Stars' },
	{ username: '@gongt108', message: 'Avatar the Last Airbender' },
	{ username: '@soyrvelez', message: 'The Curse' },
	{ username: '@DougAlex32', message: 'Breaking Bad' },
	{ username: '@ositae', message: 'Friday' },
	{ username: '@mike-gustafson', message: 'Monarch Legacy of Monsters' },
	{ username: '@DonEvans63', message: 'Valhalla' },
	{ username: '@DGWonKanobi', message: 'Money Heist' },
	{
		username: '@romebell',
		message: 'Peaky Blinders',
		image: 'https://ca.slack-edge.com/T0351JZQ0-U0166E8MHJT-a00fa1232131-512',
	},
	{ username: '@avisa-ga', message: 'New Amsterdam' },
];
function RandomUpdates() {
	const updatesDisplay = updates.map((msg, idx) => {
		return (
			<div key={idx}>
				<p>{msg.message}</p>
				<h5>{msg.username}</h5>
			</div>
		);
	});
	return <div>{updatesDisplay}</div>;
}

export default RandomUpdates;
