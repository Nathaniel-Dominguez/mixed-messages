const messages = ['hello there', 'you underestimate my power', 'don\'t try it'];

const randomMessage = (messages) => {

return messages[Math.floor(Math.random() * messages.length)];
}

console.log(randomMessage(messages))