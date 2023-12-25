const puppeteer = require("puppeteer");
const solutionObj = require("./solution");
const url = "https://www.hackerrank.com/auth/login";
let page;
const email = "";
const password = "";
console.log("before");

// function to perform wait and click 
function waitAndClick(selector, cPage) {
    return new Promise(function (resolve, reject) {
        let waitForModelPromise = cPage.waitForSelector(selector);
        waitForModelPromise.then(function () {
            let clickModalPromise = cPage.click(selector);
            return clickModalPromise;
        }).then(function () {
            resolve();
        }).catch(function (err) {
            reject();
        })
    })
}

const browserOpen = puppeteer.launch({
    headless: false,
    args: ["--start-maximized"],
    defaultViewport: null
});

browserOpen.then(function (browserObj) {
    const browserOpenPromise = browserObj.newPage();
    return browserOpenPromise;
}).then(function (newTab) {
    page = newTab;
    const hackerrankOpenPromise = page.goto(url);
    return hackerrankOpenPromise;
}).then(function () {
    const emailIsEnterred = page.type("input[id='input-1']", email, {
        delay: 50
    });
    return emailIsEnterred;
    // console.log("hackerank reached");
}).then(function () {
    const passwordIsEnterred = page.type("input[id='input-2']", password, {
        delay: 50
    });
    return passwordIsEnterred;
}).then(function () {
    const loginclickedPromise = page.click("button[data-analytics='LoginPassword']", {
        delay: 50
    });
    return loginclickedPromise;
}).then(function () {
    const clickAlgoPromise = waitAndClick("div[data-automation='algorithms']", page)
    return clickAlgoPromise;
}).then(function () {
    const wait = page.waitForTimeout(3000);
    return wait;
}).then(function () {
    const warmupCheckboxPromise = waitAndClick("input[value='warmup']", page);
    return warmupCheckboxPromise;
}).then(function () {
    const wait = page.waitForTimeout(3000);
    return wait;
}).then(function () {
    const getAllQuestionPromise = page.$$("div.challenge-submit-btn", {
        delay: 50
    });
    return getAllQuestionPromise;
}).then(function (questionArr) {
    const questionSolvePromise = questionSolver(page, questionArr[0], solutionObj.solutionArr[0]);
    return questionSolvePromise;
}).catch(function (err) {
    console.log(err);
})


function questionSolver(page, question, answer) {
    return new Promise(function (resolve, reject) {
        let questionWillBeClicked = question.click();
        questionWillBeClicked.then(function () {
                return page.waitForTimeout(2000);
            }).then(function () {
                let editorInFocusPromise = waitAndClick("div.monaco-editor.no-user-select.vs", page);
                return editorInFocusPromise;
            }).then(function () {
                return waitAndClick("input.checkbox-input", page);
            })
            .then(function () {
                console.log("start waiting")
                return page.waitForSelector("div.custom-input.theme-old.size-medium");
            })
            .then(function () {
                console.log("type")
                return page.type("div.custom-input.theme-old.size-medium", answer, {
                    delay: 50
                });
            }).then(function () {
                return page.keyboard.down("Control");
            }).then(function () {
                return page.keyboard.press("A", {
                    delay: 100
                })
            }).then(function () {
                return page.keyboard.press("x", {
                    delay: 100
                })
            }).then(function () {
                return page.keyboard.up("Control");
            }).then(function () {
                return waitAndClick("div.monaco-editor.no-user-select.vs", page)
            }).then(function () {
                return page.keyboard.down("Control");
            }).then(function () {
                return page.keyboard.press("A", {
                    delay: 100
                })
            }).then(function () {
                return page.keyboard.press("V", {
                    delay: 100
                })
            }).then(function () {
                return waitAndClick("button.hr-monaco__run-code", page)
            });
    }).then(function () {
        resolve();
    }).catch(function (err) {
        reject();
    })
}