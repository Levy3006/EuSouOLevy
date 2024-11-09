import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("index.ejs");
});
app.get("/sobreMim.ejs", (req, res) => {
    res.render("sobreMim.ejs");
});
app.get("/projetos.ejs", (req, res) => {
    res.render("Projetos.ejs");
});
app.get("/artigos.ejs", (req, res) => {
    res.render("artigos.ejs");
});

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup", err);
    console.log("Server listening on Port: ", PORT);
})
