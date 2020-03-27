class Input {
  constructor(position) {
    this.position = position;
    this.currentIndex = 0;
    this.array = [];
  }
  add(inputValue) {
    this.array.push(inputValue);
    this.currentIndex = this.array.length - 1;
  }
  next() {
    if (this.currentIndex < this.array.length - 1) {
      this.currentIndex += 1;
      let input = document.getElementsByName(this.position + 'name')[0];
      input.value = this.array[this.currentIndex];
    }
  }
  previous() {
    if (this.currentIndex !== 0) {
      this.currentIndex -= 1;
      let input = document.getElementsByName(this.position + 'name')[0];
      input.value = this.array[this.currentIndex];
    }
  }
  saveInput() {
    let input = document.getElementsByName(this.position + 'name')[0];
    if (this.position === 'first') {
      firstName.add(input.value);
    } else {
      lastName.add(input.value);
    }
  }
  back() {
    if (this.position === 'first') {
      firstName.previous();
    } else {
      lastName.previous();
    }
  }
  forward() {
    if (this.position === 'first') {
      firstName.next();
    } else {
      lastName.next();
    }
  }
}
