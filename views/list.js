//const timeAgo = require("node-time-ago");
const html = require("html-template-tag");

module.exports = posts => `<!DOCTYPE html>
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
        ${posts.map(post => 
            `<li>
              <a href="/posts/${post.id}">${post.title}</a>
            </li>  
        `).join('')}
        </div>
        </body>
    </html>
   `