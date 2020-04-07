function InputHandler(className) {
    const currentClass = className;
    let currentIndex;
    const history = [];

    const input = document.querySelector('.' + currentClass + ' > input');
    const backButton = document.querySelector('.' + currentClass + ' > button[name=back]');
    const forwardButton = document.querySelector('.' + currentClass + ' > button[name=forward]');

    function addValue(newValue) {
        history.push(newValue);
        currentIndex = history.length - 1;
    }
    function next() {
        const lastElementIndex = history.length - 1;
        if (currentIndex < lastElementIndex) {
            currentIndex += 1;
            input.value = history[currentIndex];
            if (currentIndex === lastElementIndex) {
                forwardButton.disabled = true;
            }
        }
        if (currentIndex !== 0) {
            backButton.disabled = false;
        }

    }

    function previous() {
        if (currentIndex !== 0) {
            currentIndex -= 1;
            input.value = history[currentIndex];
            if (currentIndex === 0) {
                backButton.disabled = true;
            }
        }
        if (currentIndex < history.length) {
            forwardButton.disabled = false
        }
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
