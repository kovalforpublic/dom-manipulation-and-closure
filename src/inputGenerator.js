function InputHandler(position) {
    this.position = position;
    this.currentIndex;
    this.history = [];
    this.input = document.getElementsByName(this.position + 'name')[0];
    this.backButton = document.getElementsByName("back")[position === "first" ? 0 : 1];
    this.forwardButton = document.getElementsByName("forward")[position === "first" ? 0 : 1];

    this.bindOninput = function() {
        this.input.addEventListener('input', () => {
            this.addValue(this.input.value);
        })
    }
    this.bindOnclick = function() {
        this.backButton.addEventListener('click', () => {
            this.previous();
        })
        this.forwardButton.addEventListener('click', () => {
            this.next();
        })
    }
    this.addValue = function(newValue) {
        this.history.push(newValue);
        this.currentIndex = this.history.length - 1;
    }
    this.next = function() {
        const lastElementIndex = this.history.length - 1;
        if (this.currentIndex < lastElementIndex) {
            this.currentIndex += 1;
            this.input.value = this.history[this.currentIndex];
            if (this.currentIndex === lastElementIndex) {
                this.forwardButton.disabled = true;
            }
        }
        if (this.currentIndex !== 0) {
            this.backButton.disabled = false;
        }
    }
    this.previous = function() {
        if (this.currentIndex !== 0) {
            this.currentIndex -= 1;
            this.input.value = this.history[this.currentIndex];
            if (this.currentIndex === 0) {
                this.backButton.disabled = true;
            }
        }
        if (this.currentIndex < this.history.length) {
            this.forwardButton.disabled = false
        }
    }
}
