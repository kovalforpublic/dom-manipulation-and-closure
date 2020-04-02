const firstName = new InputHandler('first');
const lastName = new InputHandler('last');

firstName.bindOninput();
lastName.bindOninput();

firstName.bindOnclick();
lastName.bindOnclick();
