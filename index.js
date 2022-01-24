const messages = [
	'Hello There', 
	'You Underestimate My Power', 
	'Don\'t Try It',
	'This is the Way',
	'May the Force be with You',
	'My Chains are Broken',
	'Do or Do Not, there is no Try',
	'Let the Force Flow through You',
	'Luke, I am Your Father',
	'I Have a Bad Feeling about This'
];

const randomMessage = () => {
	let random = messages[Math.floor(Math.random(messages) * messages.length)];
	document.getElementById('text').innerHTML = random;
};
