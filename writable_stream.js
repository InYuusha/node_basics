var fs = require('fs')

var myReadStream = fs.createReadStream(__dirname +'/readme.txt','utf-8')
var myWriteStream = fs.createWriteStream(__dirname+'/writeMe.txt')

myReadStream.on('data',(chunk)=>{
console.log('new chunk recieved ')
myWriteStream.write(chunk)
})