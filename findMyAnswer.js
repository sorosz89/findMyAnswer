class FindMyAnswer {

    isQuestion(message){
        return message.contains('?');
    }

    getAnswer(request){
     // return this.isQuestion(request)
    }
   
}

module.exports = FindMyAnswer