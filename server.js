var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var info1={
    name:`Tammana`,
    age:26,
    flim:`<ol>
    <li>BAHUBALI
    <li>HAPPY DAYS
    <li>etc.,`
};
function createTemplate(data)
{
  var name=data.name;
  var age=data.age;
  var flims=data.flim;
  var htmlTemplate=`
  <html>
    <head>
        <title>
            Tammana | article-one
        </title>
        <style>
       
            
        </style>
    </head>
    <body>
        <a href='/'>home</a>
        <div>
        <div class="sos">
        <img src="https://4.bp.blogspot.com/-WLu_BDJ7VFU/V39bigmGQzI/AAAAAAAADho/H9MsqCOSV2gTItxdftFb6hod7ADFloLXQCLcB/s1600/mini-tamanna+hot+%285%29.jpg">
        <h3>
        $(name)
        </h3>
        </div>
        <div class='tammana'>
        <h2>
        Details
        </h2>
        <p>
        age::$(age)
        <br>
        flims::$(flims)
        </div>
        </div>
    </body>

</html>

  
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req,res){
  res.sendFile(path.join(__dirname, 'article-one.html'));
});
app.get('/article-two',function(req,res){
   res.send('article two deal with life of san') ;
});
app.get('/article-three',function(req,res){
   res.send('article 3 deal with life of santosh') ;
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
