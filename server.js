var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles ={
    'article-one' : {
        title :'Article-One | Santosh',
        heading : 'Article-One',
        date : 'Oct 24 th,2016',
        content : `
        <p>
        This is about our hosting
        </p>`
    },
        'article-two' : {
        title :'Article-two | Santosh',
        heading : 'Article-two',
        date : 'Oct 24 th,2016',
        content : `
        <p>
        Our  Restaruants
        </p>`
        },
            'article-three' : {
        title :'Article-three | Santosh',
        heading : 'Article-three',
        date : 'Oct 24 th,2016',
        content : `
        <p>
        Our Team
        </p>`
    },
    
};
function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = 
   ` <html>
    <head>
    <title>
        ${title}
    </title>
    <meta name="viewport" content="device-width ,initial-scale=1"/>
    <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container" >
            <div>
             <a href="/"> Home</a>
             </div>
             <br/>
             <h3>
             ${heading}
             </h3>
             <div>
             ${date}
             </div>
             <div>
              ${content}
             </div>
        </div>
    </body>
    </html>
    `;
        
}

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname, 'ui/index.html'));
});
var counter=0;
app.get('/counter',function(req,res){
    counter+=1;
  res.send(counter.toString());
});
var names =[];
app.get('/submit-name',function(req,res){
    var name = req.query.name;
    name.push(name);
  res.send(JSON.stringify(names));
});
app.get('/:articleName',function(req,res){
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/sastra.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'sastra.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
