import React from 'react';

const updates = [
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

