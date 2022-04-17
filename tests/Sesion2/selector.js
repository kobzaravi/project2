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