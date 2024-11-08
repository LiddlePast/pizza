const modal = document.getElementById('modal');
const chatField = document.getElementById('chat');
const sendMessageBtn = document.getElementById('btn-send');
const inputField = document.getElementById('input-text');
const documentTitle = "DOCUMENT";
let inputText;

document.onload = function () {
    document.title = documentTitle;
}

const responses = [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at consequuntur distinctio dolor ex, explicabo facere fugiat hic ipsam ipsum laudantium maiores nobis possimus quas qui repudiandae tenetur totam unde?",
    "А ещё сторонники тоталитаризма в науке будут призваны к ответу. Также как внедрение современных методик обеспечивает широкому кругу (специалистов) участие в формировании новых принципов формирования материально-технической и кадровой базы.",
];

setTimeout(function () {
    modal.classList.add('-translate-y-full');
}, 1500);

function createMessage(inputMessage, userType) {
    if (inputMessage.length > 0) {
        let message = document.createElement('div');
        message.className = 'message w-full rounded-full flex'
        message.classList.add((userType === 'user') ? 'justify-end' : 'justify-start')
        message.insertAdjacentHTML('beforeend', `
            <div class="${userType === 'user' ? 'text-end' : 'text-start'} border-2 bg-yellow-100 w-fit max-w-96 p-2 rounded-md">
                <span style="word-wrap: anywhere">${inputMessage}</span>
            </div>
        `)
        addMessageToChat(message);
    } else {
        alert('Вы ввели пустой запрос');
        return false;
    }
}

function addMessageToChat(inputMessageElement) {
    chatField.insertAdjacentElement('beforeend', inputMessageElement);
    chatField.scrollTo({
        top: 10000,
        behavior: "smooth"
    })
}

sendMessageBtn.addEventListener('click', function (e) {
    e.preventDefault();
    inputText = inputField.value;
    inputField.value = '';
    if (inputText.length > 0) {
        createMessage(inputText, 'user')
        generateResponse();
    }
});

function chooseText() {
    let choice = Math.abs(Math.round(Math.random() * responses.length - 1));
    console.log(choice)
    return responses[choice];
}

function generateResponse() {
    setTimeout(function () {
        createMessage('Обработка...', 'robot')
    }, 500);
    setTimeout(function () {
        createMessage('Пытаюсь найти ответ...', 'robot')
    }, 1500);
    setTimeout(function () {
        createMessage(chooseText(), 'robot');
    }, 2000);
}