import * as MessageService from "../services/message.js";

function message(request, response) {
    // const message = request.body.message;
    // const phoneNumber = request.body.phoneNumber;
    //refatorando codigo acima com desestruturação
    const { message, phoneNumber } = request.body;
    const responseMessage = MessageService.sendMessage(message, phoneNumber);
    response.send(responseMessage);
}

export { message }