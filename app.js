const express=require("express");
const app=express();
const path=require("path");
const ejsmate=require("ejs-mate");
const methodOverride=require("method-override");


app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"/public")));



app.engine("ejs",ejsmate);


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));



app.get("/main",(req,res)=>{
    res.render("listings/main.ejs");
});
app.get("/medicine",(req,res)=>{
    res.render("listings/medicine.ejs");
});
app.get("/education",(req,res)=>{
    res.render("listings/education.ejs");
});
app.get("/psychology",(req,res)=>{
    res.render("listings/psychology.ejs");
});
app.get("/technology",(req,res)=>{
    res.render("listings/technology.ejs");
});


app.listen(8080,()=>{
    console.log("app is listening on the port 8080");
});