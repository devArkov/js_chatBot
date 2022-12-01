const chatBody = document.querySelector('.body'),
      textInput = document.querySelector('.text-input'),
      send = document.querySelector('.send');

send.addEventListener('click', () => renderUserMessage());


textInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        renderUserMessage();
    }
});
const renderUserMessage = () => {
    const userInput = textInput.value;
    renderMessageElement(userInput, 'user');
    textInput.value = '';
    setTimeout(() => {
        renderChatbotResponse(userInput);
        setScrollPosition();
    }, 1000);
};

const renderChatbotResponse = (userInput) => {
    const res = getChatbotResponse(userInput);
    renderMessageElement(res);
};

const renderMessageElement = (text, type) => {
    let className = 'user-message';
    if (type !== 'user') {
        className = 'chatbot-message';
    }
    const messageElement = document.createElement('div');
    const textNode = document.createTextNode(text);
    messageElement.classList.add(className);
    messageElement.append(textNode);
    chatBody.append(messageElement);
};

const getChatbotResponse = (userInput) => {
    return responseObj[userInput] == undefined ? 'Please try something else' : responseObj[userInput];
};

const setScrollPosition = () => {
    if (chatBody.scrollHeight > 0) {
        chatBody.scrollTop = chatBody.scrollHeight;
    }
};