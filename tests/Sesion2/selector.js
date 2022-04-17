import { AngularJSSelector } from 'testcafe-angular-selectors';
import { Selector } from 'testcafe';

fixture `My fixture`
    .page('http://juliemr.github.io/protractor-demo/');

const gobuttonInput = Selector('#gobutton');

test('Obtain Element State', async t => {
    await t
    .click(gobuttonInput)
    .wait(5000)

    const firstInputChecked = await gobuttonInput.checked; // returns true
});

test('add new item', async t => {
    await t
        .typeText(AngularJSSelector.byModel('newTodo'), 'new item')
        .pressKey('enter')
        .expect(Selector('#todo-list').visible).ok();
});