const messages = [
	'Hello there', 
	'You underestimate my power', 
	'Don\'t try it',
	'This is the way',
	'May the force be with you',
	'My chains are broken'
];

const randomMessage = () => {
	let random = messages[Math.floor(Math.random(messages) * messages.length)];
	document.getElementById('text').innerHTML = random;
};
