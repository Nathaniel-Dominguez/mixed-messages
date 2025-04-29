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

// Make a news feed using FIFO(first in first out) queue so that items are processed
// and then removed from the queue in order. https://stackoverflow.com/a/35031174 <- FIFO vs LIFO
let newsQueue = [];
// The default RSS page for reddit is 25 items
const queueLength = 25;
const offbeatURI = 'https://www.reddit.com/r/offbeat/new/.rss?sort=new';

const fetchNews = () => {
    fetch(offbeatURI)
        .then(res => res.text())
        .then(txt => new window.DOMParser().parseFromString(txt, 'text/html'))
        .then(data => {
            console.log(data)
            const items = data.querySelectorAll("item")
            console.log(items)
        })
}
