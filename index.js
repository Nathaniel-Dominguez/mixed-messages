const messages = [
	'hello there', 
	'you underestimate my power', 
	'don\'t try it'
];

const randomMessage = () => {
	let random = messages[Math.floor(Math.random(messages) * messages.length)];
	document.getElementById('text').innerHTML = random;
};
