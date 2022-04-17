fixture `MyFixture`

test
    .page `http://juliemr.github.io/protractor-demo/`
    ('My test', async t => {
        console.log("start calc site")
    });

    test
    .page `https://testcafe.io/documentation/402834/guides/basic-guides/install-testcafe`
    ('My test', async t => {
        console.log("start testcafe site")
    });  