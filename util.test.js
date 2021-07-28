const puppeteer = require('puppeteer')
import { validateValue } from './util.js'

test('should', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 60,
        args: ['--window-size = 1920, 1080']
    })

    const WebPage = await browser.newPage()
    await WebPage.goto(
        'http://127.0.0.1:5500/index.html'
    )


    await WebPage.click('#btn')

    await WebPage.click('#name')
    await WebPage.type('#name', "saul")


    await WebPage.click('#btn')


    await WebPage.click('#password')
    await WebPage.type('#password', "123456789")

    await WebPage.click('#btn')



}, 10000)






