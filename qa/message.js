const {
    greetings,
    questions
} = require('../data/answers');
const keywords = require('../data/keywords');

class Message extends String {
    constructor(message){
        super();
        this.message = message;
    }

    isQuestion() {
        return this.message.includes('?');
    }

    isGreetings() {
        return this.message.includes(greetings.hi);
    }
}

module.exports = Message