//const timeAgo = require("node-time-ago");
const html = require("html-template-tag");

module.exports = post => `<!DOCTYPE html>
     <html>
         <head>
            <link rel="stylesheet" href="/style.css" />
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
     </html>`;