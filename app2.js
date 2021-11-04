const express = require("express");
const app = express();
const path = require('path');
const postBank = require('./postBank');
app.use(require('morgan')('dev'))
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get("/", (req, res,next) => {
    const posts = postBank.list();
   res.send(`
    <html>
        <head>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap');
                nav{
                    font-family: 'Noto Serif', serif;
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 60px;
                    padding-bottom: 10px;
                    border-bottom: 1px solid #ddd;
                }
                a {
                    font-family: 'Noto Serif', serif;
                    text-decoration: none;
                }
            </style>
        </head>
        <body>
        <h1> To Do </h1>
        <div class="chore-list">
        ${posts.map(post => `
          <div class='chore-item'>
            <p>
              <a href='/posts/${post.id}'>-${post.title}</a>
            </p>
          </div>`
        ).join('')}
        </body>
    </html>
   `)
})

app.get('/posts/:id', (req, res) => {
    const id = req.params.id;
    const post = postBank.find(id)
    if (!post.id) {
        // If the post wasn't found, just throw an error
        app.get('/', function (req, res) {
          throw new Error('BROKEN') // Express will catch this on its own.
        })
      }
    res.send(`
     <html>
         <head>
         <style>
                @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap');
                .home-button{
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    border: 2px solid;
                    float: right;
                    padding: 10px;
                    top: 0px;
                    text-decoration: none;
                    color: black;
                    background-color: lightgray;
                    font-family: 'Noto Serif', serif;
                }
                h1 .chore-list{
                    font-family: 'Noto Serif', serif;
                }
            </style>
         </head>
         <body>
         <nav>
             <a href='/' class='home-button'>Home</a>
         </nav>
         <h1> To Do </h1>
         <div class="chore-list">
            <h2>${post.title}</h2>
            <p>${post.content} - ${post.time}</p>
         </div>
         </body>
     </html>
    `)
 })
 

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('listening on port${port}'))