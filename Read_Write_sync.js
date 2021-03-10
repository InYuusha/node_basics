//this type of file read is sync it wont execute the code down below it, until it completes
var fs =require('fs')

var readme = fs.readFileSync('./readme.txt','utf-8');

fs.writeFileSync('./writeme.txt',readme)
