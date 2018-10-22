const answers = require('../data/answers');
const keywords = require('../data/keywords');
const Message = require('./message');

class FindMyAnswer {

    getAnswer(message) {
        let answer = '';
        let m = new Message(message);

        if (m.isQuestion()) {
            answer = answers.clarification.whatDoYouMean;
        }
        if (m.isGreetings()) {
            answer = answers.greetings.hi
        }
        if (m.isYouTubeLink()) {
            answer = answers.haveNoTime.noTime
        }
        if (m.getMatch('what is your name?')) {
            answer = answers.introduction.sonar
        }
        if (m.getMatch('dragon ball or naruto?')) {
            answer = 'dragon ball, of course...'
        }
        if (m.getMatch('beer')) {
            answer = 'wanna drink some beer, or whisky'
        }
        if (m.getMatch('fuck')) {
            answer = 'hey, dont talk dirty to me'
        }
        if (m.getMatch('ossian')) {
            answer = 'Aznap mikor megszülettem, hulló csillag volt az égen... :D'
        }
        if (m.getMatch('whiskey')) {
            answer = 'whiskey.. oh, I like it'
        }
        if (m.getMatch('sonar')) {
            answer = answers.introduction.sonarLong
        }
        if (m.getMatch('go out')) {
            answer = 'friday night, maybe'
        }
        if (m.getMatch('weather')) {
            answer = 'https://koponyeg.hu/elorejelzes/Debrecen'
        }
        if (m.getMatch('chatbot')) {
            answer = 'https://www.youtube.com/watch?v=mpMg1upld0w'
        }
        if (m.getMatch('sandor orosz') || m.getMatch('orosz sandor') || m.getMatch('orosz sándor')) {
            answer = 'https://www.youtube.com/watch?v=siwpn14IE7E'
        }
        if (m.getMatch('nice bot')) {
            answer = 'I know :P'
        }
        if (m.getMatch('how are you') || (m.getMatch('how are you today'))) {
            answer = 'fine, thank you'
        }
        if (m.getMatch('work') || (m.getMatch('epam'))) {
            answer = 'yes, I work for epam'
        }
        if (m.getMatch('my presentation') || (m.getMatch('my demo'))) {
            answer = 'I think I should apply for a job at epam, or check mentoring program'
        }
        return answer
    }
}

module.exports = FindMyAnswer