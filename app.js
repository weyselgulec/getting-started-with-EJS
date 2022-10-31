const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = 3000
var items = ["buy food", "cook food", "eat food"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/', (req, res) => {


   var option = {
    weekday: "long",
    day: "numeric",
    month: "long"
   };

   var day = new Date().toLocaleDateString("en-US", option);

  res.render("list", {day: day, newListItems: items});

  app.post("/", function(req, res) {
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
  })
})

   


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
