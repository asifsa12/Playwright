import { test, expect, Page } from '@playwright/test'

//any variable can be defined with let or const
let page:Page

//create beforeAll function to define only one instance of the page
test.beforeAll(async({browser}) => {
    page = await browser.newPage()
})

//declare and set the arraylist
let cars = Array<string>()
cars.push("BMW")
cars.push("BENZ")
cars.push("BENTLEY")

test("search for multiple cars",async() =>{

    for (let i = 0; i<cars.length;i++){
    
    //navigate to google
    await page.goto("https://www.google.com")
    //wait few seconds (thread.sleep in java)
    await page.waitForTimeout(2000)
    //type bmw in the search field
    await page.locator("xpath = //*[@name='q']").fill(cars[i],{timeout:2000})
    console.log("Typing bmw in the search field")
    //click on the search button
    await page.locator("xpath = //*[@name='btnK']").nth(0).click({timeout:2000})
    console.log("Clicked on google search button")
    //capture the search result
    let result = await page.locator("xpath = //*[@id='result-stats']").textContent({timeout:4000})
    console.log("Captured the search result")
    //split the search result
    let resultArray = result?.split(" ")
    //print out only the search result number
    //new commit 090624
    console.log("Search result number is " + resultArray)
    }//end of for loop
    
    
    })//end of test