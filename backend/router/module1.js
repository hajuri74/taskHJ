module.exports = (app,maria)=>{
    app.get('/crawl/:nowPage',(req,res)=>{
        const crawlGrop = require('../services/crawl');

        let newsArr = crawlGrop.crawl(req.params.nowPage).then(newsRes=>{
            console.log(newsRes);
            res.send(newsRes);
        });

    });

    app.get('/crawl/save/list',(req,res)=>{
        maria.query('SELECT * FROM crawl WHERE type LIKE "%news%" ',function(err,rows,fields){
            if(!err){
                res.send(rows);
            }else {
                console.log(err);
                res.send(err);
            }
        });
    });

    app.post('/crawl/save',(req,res)=>{
        const result = maria.query('INSERT IGNORE INTO crawl (title, link, type, date) VALUES (?, ? ,? , NOW() ) ',[req.body.newsTitle, req.body.newsLink, "news"],function(err,rows,fields){
            if(!err){
                console.log(rows);
            }else {
                console.log(err);
            }
        });

        maria.query('SELECT * FROM crawl WHERE type LIKE "%news%" ',function(err,rows,fields){
            if(!err){
                res.send(rows);
            }else {
                res.send(err);
            }
        });
    });

    app.post('/crawl/news/delete',(req,res)=>{
        let query = "%" + req.body.title + "%";
        maria.query('DELETE FROM crawl WHERE title LIKE ? ',[query], function(err,rows,fields){
            if(!err){
                console.log(rows);
            }else {
                console.log(err);
            }
        });

        maria.query('SELECT * FROM crawl WHERE type LIKE "%news%"',function(err,rows,fields){
            if(!err){
                res.send(rows);
            }else {
                res.send(err);
            }
        });
    });

    app.get('/crawl/chart/data',(req,res)=>{
        maria.query('SELECT COUNT(title) as cnt FROM crawl WHERE type LIKE "%news%"',function(err,rows,fields){
            if(!err){
                res.send(rows);
            }else {
                res.send(err);
            }
        });
    });

}