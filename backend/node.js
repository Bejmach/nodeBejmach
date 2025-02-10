const http = require("http");

const PORT = 5000;

async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error: ${response.status}");
  }
  return response.json();
}

const serv = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method == "GET" && req.url == "/posts") {
    try {
      const data = await fetchData(
        `https://jsonplaceholder.typicode.com/posts`,
      );
      res.writeHead(200);
      res.end(JSON.stringify(data));
    } catch (err) {
      res.writeHead(500);
      res.end(JSON.stringify({ err: "error" }));
    }
  } else if (req.method === "GET" && req.url.startsWith("/posts/")) {
    const id = req.url.split("/")[2];

    try {
      const post = await fetchData(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      );
      res.writeHead(200);
      res.end(JSON.stringify(post));
    } catch (err) {
      res.writeHead(500);
      res.end(JSON.stringify({ err: "error" }));
    }
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ err: "not found" }));
  }
});

serv.listen(PORT, () => {
  console.log(`server working on http://localhost:${PORT}`);
});
