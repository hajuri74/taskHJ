const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

async function crawl(nowPage){
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    
    const startNum = (nowPage-1) * 10;
    const goUrl = `https://www.google.com/search?q=%EB%B6%80%EC%82%B0+%EC%83%8C%EB%93%9C%EB%B2%84%EA%B7%B8&sca_esv=074560fb4084e5a7&hl=ko&tbm=nws&prmd=ivnsmbz&sxsrf=ACQVn0_Fr89e1ZpECnladiGSDUGC-S9KDg:1710829171212&ei=cy75ZavLDMn31e8P1KGwkA0&start=`+startNum+`&sa=N&ved=2ahUKEwjr0JWo1_-EAxXJe_UHHdQQDNI4ChDy0wN6BAgEEAQ&biw=1281&bih=1303&dpr=1`;

    await page.goto(goUrl);
    
    const content = await page.content();
    const $ = cheerio.load(content);

    let newsArr = [];

    const paging = $("#botstuff > div > div:nth-child(3) > table > tbody > tr").find("td");
    const pageFirst = paging.eq(1).text();
    const pageLast = paging.eq(paging.length-2).text();

    newsArr.push({pageFirst,pageLast});
    
    const lists = $("#rso > div > div > div");
    
    lists.each((index, list) => {
        // 각 하위 노드
        const link = $(list).find("div > div > a").attr('href');
        const title = $(list).find("div > div > a > div > div.SoAPf > div.n0jPhd").text();
        
        newsArr.push({link,title});         
    });
    
    // 브라우저를 종료
    browser.close();    
    return newsArr;
}

exports.crawl = crawl;