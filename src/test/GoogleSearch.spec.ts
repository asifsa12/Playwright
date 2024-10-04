import { test, expect, Page } from '@playwright/test'

//any variable can be defined with let or const
let page:Page

//create beforeAll function to define only one instance of the page
test.beforeAll(async({browser}) => {
    page = await browser.newPage()
})


test("search for bmw on google search field @smoke",async() => {
//print out steps to console (sys.out in java)
console.log("Navigating to google home page")
//navigate to google
await page.goto("https://www.google.com")
//wait few seconds (thread.sleep in java)
await page.waitForTimeout(3000)
//type bmw in the search field
await page.locator("xpath = //*[@name='q']").fill("BMW")
console.log("Typing bmw in the search field")
//click on the search button
await page.locator("xpath = //*[@name='btnK']").nth(0).click()
console.log("Clicked on google search button")
//capture the search result
let result = await page.locator("xpath = //*[@id='result-stats']").textContent()
console.log("Captured the search result")
//split the search result
let resultArray = result?.split(" ")
//print out only the search result number
console.log("Search result number is " + resultArray[1])
//comment for playwright push
//comment to confirm separate repository from mike 
})