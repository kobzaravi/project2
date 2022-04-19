import { AngularJSSelector } from 'testcafe-angular-selectors';
import { Selector } from 'testcafe';

fixture `My fixture`
    .page('http://juliemr.github.io/protractor-demo/');

const gobuttonInput = Selector('#gobutton');
const Result = Selector('#ng-binding');

test('Obtain Element State', async t => {
    await t
    .click(gobuttonInput)
    .wait(2000)

    const firstInputChecked = await gobuttonInput.checked; // returns true
});

test('add new item', async t => {
    await t
        .typeText(AngularJSSelector.byModel('first'), '4')
        .click(AngularJSSelector.byModel('operator'))
        .pressKey('down')
        .typeText(AngularJSSelector.byModel('second'), '2')
        .pressKey('enter')
        .wait(4000)

        .expect(Result.innerText).eql('2')
        

});
