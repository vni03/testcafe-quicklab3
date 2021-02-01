import { Selector } from 'testcafe';

fixture `Simple Test`
    .page `../src/simple_page.html`

test('Test1', async t => {
    const msg = Selector('#message');
    await t
        .typeText(msg, `Hello from TestCafe!`)
        .expect(msg.value).contains(`Hello`,'Input contains text "Hello"')
        .click(`#submit-button`)
        .expect(msg.value).eql('', 'input is empty');
});