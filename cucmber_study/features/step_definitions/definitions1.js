
const { Given, When, Then } = require('cucumber');
const assert = require('assert');
var browser = browser || chrome


//// Your step definitions /////


Given(/^User is on home page$/,  function (url) {

    return browser.get("https://angularjs.org/");
});

When(/^user types a '([^']*)' in the task field$/,  function (arg1) {

    return element(by.model('todoList.todoText')).sendKeys(arg1);;
});

When(/^clicks Add button$/,  function () {

    return element(by.css('[type="submit"]')).click();
});

Then(/^a '([^']*)' is added to the list$/,  function (arg1) {

    return element.all(by.css('[class="checkbox"]')).last().getText().toBe(arg1);
});