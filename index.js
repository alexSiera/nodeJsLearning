const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url);
    res.write("<h1>hello from nodeJs</h1>");
    res.write("<h2>hello from nodeJs</h2>");
    res.write("<h3>hello from nodeJs</h3>");
    res.write("<h4>hello from nodeJs</h4>");
    res.write("<h4>hello from nodeJs</h4>");


    res.end(`
        <div style="background: red; width: 200px; height: 200px">
            <h4>hello from nodeJs</h4>
        </div>
    `);
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})