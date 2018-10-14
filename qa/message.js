const {
    greetings,
    questions
} = require('../data/answers');
const keywords = require('../data/keywords');

class Message extends String {
    constructor(message){
        super();
        this.message = message.toLowerCase();
    }

    isQuestion() {
        return this.message.includes('?');
    }

    isGreetings() {
        return this.message.includes(greetings.hi);
    }

    isYouTubeLink(){
        return this.message.includes('youtube.com')
    }

    getMatch(custom){
        return this.message.includes(custom);
    }
}

module.exports = Message