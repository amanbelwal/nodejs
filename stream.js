var fs=require("fs");
var data="";
var reader=fs.ReadStream("input.txt");
reader.setEncoding('UTF-8');
reader.on('data',function(chunk){
    data+=chunk;
});
reader.on('end',function(){
    console.log(data);
});
reader.on('error',function(){
   console.log(err.stack);
});
console.log("PROGRAM ENDED");