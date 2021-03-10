var fs=require('fs');

fs.unlink('hello.txt',(err,data)=>{console.log(data)}); //sync

fs.unlinkSync('hello.txt')   //async

