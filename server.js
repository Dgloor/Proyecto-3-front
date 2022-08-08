let express = require("express");

let app = express();

app.use(express.static(__dirname + "/dist/proyecto-3-front"));

app.get("/*", (req, resp) => {
  resp.sendFile(__dirname + "/dist/proyecto-3-front/index.html");
});

app.listen(process.env.PORT || 8080);
