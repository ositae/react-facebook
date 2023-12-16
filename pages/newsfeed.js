import React from 'react';
import Image from 'next/image';
import styles from '../styles/Newsfeed.module.css';

const newsfeed = [
	{
		title: '12 Popular Fast Food Franchises You Can Own for Under $100000',
		// image:
		// 	'https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		article:
			'In this article, we will take a look at the 12 popular fast food franchises you can own for under $100000. If you want to skip our detailed analysis, you can go directly to 5 Popular Fast Food Franchises You Can Own for Under $100000...',
	},
	{
		title: 'Disney, Universal Studios, and More Fan-tastical Destinations',
		// image:
		// 	'https://images.unsplash.com/photo-1524008279394-3aed4643b30b?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		article:
			'It’s approaching peak time for festive merriment, both for travelers packing for those winter trips and locals getting their holiday theme park fixes. Here’s what’s going on at Disney Parks, Universal Studios, Meow Wolf, and other immersive experiences just in time for the season of cheer...',
	},
	{
		title: 'The 9 Best Resorts for Snowboarders in the U.S.',
		// image:
        //     'https://unsplash.com/photos/brown-nipa-hut-near-palm-trees-and-body-of-water-during-daytime-s3o2rkTkF7I',		
        article:
			'There is no shortage of lists for the best overall ski resorts. These lists tend to be general and are based on a number of common factors. This list is different as it will cover the best resorts specifically for snowboarders...',
	},
];
function NewsFeed() {
	const newfeedDisplay = newsfeed.map((article, idx) => {
		return (
			<div className={styles.card}>
				<h4>{article.title}</h4>
				<Image src={article.image} width="150" height="100"></Image>
				<p>{article.article}</p>
			</div>
		);
	});
	return <div className={styles.container}>{newfeedDisplay}</div>;
}

export default NewsFeed;
