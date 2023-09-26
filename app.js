// npm init -y -> For no question while installing
const app = require("express")()

app.get("/",(req,res)=>{
    // res.send("Hello")

    res.json({
        Dambar: "Dambar Sing"
    })
})
app.get("/about",(req,res)=>{
    res.json({
        Dambar: "Dambar is a Future Developer"
    })
})
app.listen(3000, (req,res)=>{
    console.log("Node js at port 3000")
})

