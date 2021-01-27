function encodeAndDecodeMessages() {
    let encodeBtn = document.querySelectorAll('button')[0];
    let decodeBtn = document.querySelectorAll('button')[1];
    let inputArea = document.querySelectorAll('textarea')[0];
    let outputArea = document.querySelectorAll('textarea')[1];

    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);


    function encode(ev) {
        let input = inputArea.value;
        inputArea.value = '';
        let sendingMessage = '';

        for (let i = 0; i < input.length; i++) {
            let ascii = input.charCodeAt(i);
            sendingMessage += String.fromCharCode(ascii + 1);
        }
        outputArea.value = sendingMessage;
    }

    function decode(ev) {
        let input = outputArea.value;
        let decodedMessage = '';

        for (let i = 0; i < input.length; i++) {
            let ascii = input.charCodeAt(i);
            decodedMessage += String.fromCharCode(ascii - 1);
        }

        outputArea.value = decodedMessage;
    }
}