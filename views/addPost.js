const html = require("html-template-tag");

module.exports = () => `<!DOCTYPE html>
    <html>
    <head>
        <title> What do we need to do</title>
        <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
        <nav>
             <a href='/' class='home-button'>Home</a>
         </nav>
        <div class = "chore-list">
            <header>Add Post</header>
            <form method = "post" action= "/posts">
                <label for= "title">Title</label>
                <input type="text" name = "title"/>
                <label for= "content">Content</label>
                <input type="text" name="content"/>
                <label for="time">Time</label>
                <input type="text" name="time"/>
                <textarea name="content"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    </body>
    </html>`;