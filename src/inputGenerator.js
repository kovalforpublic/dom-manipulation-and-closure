function InputHandler(className) {
    let currentIndex;
    const history = [];

    const input = document.querySelector(className + ' > input');
    const backButton = document.querySelector(className + ' > button[name=back]');
    const forwardButton = document.querySelector(className + ' > button[name=forward]');

    function addValue() {
        history.push(input.value);
        currentIndex = history.length - 1;
        checkForwardDisability();
        checkBackDisability();
    }
    function next() {
        const lastElementIndex = history.length - 1;
        if (currentIndex < lastElementIndex) {
            currentIndex += 1;
            input.value = history[currentIndex];
            checkForwardDisability();
        }
        checkBackDisability();
    }

    function previous() {
        if (currentIndex !== 0) {
            currentIndex -= 1;
            input.value = history[currentIndex];
            checkBackDisability();
        }
        checkForwardDisability();
    }

    function checkForwardDisability() {
        const lastElementIndex = history.length - 1;
        forwardButton.disabled = currentIndex === lastElementIndex ? true : false;
    }
    function checkBackDisability() {
        backButton.disabled = currentIndex === 0;
    }

    input.addEventListener('input', addValue)
    backButton.addEventListener('click', previous);
    forwardButton.addEventListener('click', next);
}
