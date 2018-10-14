const answers = require('../data/answers');
const keywords = require('../data/keywords');
const Message = require('./message');

class FindMyAnswer {

    getAnswer(message) {
        let answer = '';
        console.log("getAnswer", message)
        let m = new Message(message);
        console.log("M:", m)
        console.log("isQuestion", m.isQuestion());
        if (m.isQuestion()) {
            answer = answers.clarification.whatDoYouMean;
        }
        if (m.isGreetings()) {
            answer = answers.greetings.hi
        } else {
            answer = answers.defaults.iDontUnderstand;
        }
        return answer
    }

}

module.exports = FindMyAnswer