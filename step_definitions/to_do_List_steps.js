let cucumber = require('cucumber');
// исправить
let pageFactory = require('../support/page_factory');
let expect = require('chai').expect;

cucumber.defineSupportCode(function({ Then, When }) {
    Given(/^User is on home page$/, async function() {
        await pageFactory.getPage('home page');
        let actualUrl = await pageFactory.getPage('base page').getUrl();
        let expectedUrl = pageFactory.currentPage.url;
        expect(actualUrl).to.include(expectedUrl);
    }
        When(/^types a '([^']*)' in the task field$/, async function(task) {
        return element(by.model('todoList.todoText')).sendKeys(task);
    }
        And(/^clicks '([^']*)' button$/, async function() {
        return element(by.css('[type="submit"]')).click();
    }
    	Then(/^a '([^']*)' is added to the list$/, async function(newTask) {
        return element.all(by.css('[class="checkbox"]')).last().getText().toBe(newTask);
    }
    );
});