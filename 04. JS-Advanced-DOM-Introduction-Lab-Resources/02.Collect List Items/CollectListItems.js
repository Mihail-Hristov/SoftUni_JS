function extractText() {
    let elements = document.querySelectorAll("ul#items li");
    let textArea = document.querySelector("#result");

    for (let node of elements) {
        textArea.value += node.textContent + "\n";
    }
}