const http = require('http');
const path = require('path');
const fs = require('fs');
const server = http.createServer((req, res) => {
    if (req.method === "GET") {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })
        if (req.url === '/') {
            fs.readFile(
                path.join(__dirname, "views", "index.html"),
                "utf-8", 
                (err, content) => {
                    if (err) throw err;
                    res.end(content)
                })
        } else if (req.url === '/about') {
            fs.readFile(
                path.join(__dirname, "views", "about.html"),
                "utf-8",
                (err, content) => {
                    if (err) throw err;
                    res.end(content);
                }
            )
        } else if (res.url === "/api/users") {
            res.writeHead(200, {
                'Content-Type' : "text/json"
            })
            const users = [
                {name: 'Vladilen', age: 25},
                {name: 'Alex', age: 23},
            ]
            res.end(JSON.stringify(users))
        }
        } else if (req.method === "POST") {
        const body = [];
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
        })
        req.on('data', data => {
            body.push(Buffer.from(data));
        });
        req.on('end', () => {
            const message = body.toString().replace("title=", "");
            res.end(`
                <h1>Your message is: ${message}</h1>
            `)
        })
    }
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})