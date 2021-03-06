const path = require("path");

const express = require("express");

const adminRoutes = require("./routes/admin");

const app = express();

app.set("view engine","ejs");
app.set("views","views");
app.use(express.static(path.join(__dirname,"public")));

app.use("/admin",adminRoutes);
app.use((req,res) => {
    res.render("404");
})

app.listen(3000);