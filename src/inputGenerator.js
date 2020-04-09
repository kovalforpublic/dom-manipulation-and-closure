function InputHandler(className) {
    let currentIndex;
    const history = [];

    const input = document.querySelector(className + ' > input');
    const backButton = document.querySelector(className + ' > button[name=back]');
    const forwardButton = document.querySelector(className + ' > button[name=forward]');

    function addValue(newValue) {
        history.push(newValue);
        currentIndex = history.length - 1;
    }
    function next() {
        const lastElementIndex = history.length - 1;
        if (currentIndex < lastElementIndex) {
            currentIndex += 1;
            input.value = history[currentIndex];
            isForwardDisabled();
        }
        isBackDisabled();
    }

    function previous() {
        if (currentIndex !== 0) {
            currentIndex -= 1;
            input.value = history[currentIndex];
            isBackDisabled();
        }
        isForwardDisabled();
    }
    
    function isForwardDisabled() {
        const lastElementIndex = history.length - 1;
        forwardButton.disabled = currentIndex === lastElementIndex ? true : false;
    }
    function isBackDisabled() {
        backButton.disabled = currentIndex === 0;
    }

    (() => {
        input.addEventListener('input', () => {
            addValue(input.value);
        })
    })();
    (() => {
        backButton.addEventListener('click', () => {
            previous();
        })
        forwardButton.addEventListener('click', () => {
            next();
        })
    })();
}
