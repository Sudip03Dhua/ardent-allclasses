var fs=require('fs');
var data="Hello my dear students!!";
fs.writeFile('data.txt',data,function(err){
    if(err){
        return console.error(err)
    }
});
console.log("Data written");

fs.readFile('data.txt',function(err,data){
    if(err){
        return console.error(err)
    }
    console.log(data.toString());
});