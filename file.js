const fs = require("fs")
fs.writeFile("welcome.txt", "Hello Node", "utf-8",(err)=>{
    if(err) throw err
    console.log("le fichier créé")
})
fs.readFile('welcome.txt', function(err,data){
    if(err) {
        return console.error(err)
    }
    console.log(data.toString())
})