var fs =require('fs')
var myReadStream = fs.createReadStream(__dirname+"/readme.txt",'utf-8')
var myWriteStream = fs.createWriteStream(__dirname+"/writeme.txt")

myReadStream.pipe(myWriteStream)