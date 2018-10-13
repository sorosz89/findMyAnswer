const {
    greetings,
    questions
} = require('../data/answers');
const keywords = require('../data/keywords');

class FindMyAnswer {

    isQuestion(message) {
        return message.includes('?');
    }

    isGreetings(message) {
        return message.includes(greetings.hi);
    }

    getAnswer(message) {
        if (this.isQuestion(message)) {
            return greetings.hi;
        } else {
            return questions.whatsUp;
        }
    }

}

module.exports = FindMyAnswer