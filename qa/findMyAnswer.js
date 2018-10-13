const {
    greetings,
    questions
} = require('../data/answers');

class FindMyAnswer {

    isQuestion(message) {
        return message.contains('?');
    }

    isGreetings(message) {
        return message.contains(greetings.hi);
    }

    getAnswer(message) {
        return this.isGreetings(message) ? greetings.hi : questions.whatsUp;
    }
}

module.exports = FindMyAnswer