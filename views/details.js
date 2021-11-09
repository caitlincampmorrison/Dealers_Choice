//const timeAgo = require("node-time-ago");
const html = require("html-template-tag");

module.exports = post => `<!DOCTYPE html>
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
     </html>`