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

    get m (){
        return this.message.toLowerCase();
    }

    isQuestion() {
        return this.m.includes('?');
    }

    isGreetings() {
        return this.m.includes(greetings.hi);
    }

    isYouTubeLink(){
        return this.m.includes('youtube.com')
    }

    getMatch(custom){
        return this.m.includes(custom);
    }
}

module.exports = Message