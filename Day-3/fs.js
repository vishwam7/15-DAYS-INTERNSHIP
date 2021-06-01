const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, ' test'), (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('directory created successfully');
});

/* open file
var fs = require('fs');
fs.open('demo.js','w',function(err , file){
    if(err) throw err;
    console.log('file opened in write mode');
});
*/

/*creat file
var fs = require('fs');
fs.writeFile('test.txt' , 'Hello world', function(err){
    if(err) throw err;
    console.log('file created');
});
*/

/*append file
var fs = require('fs');
fs.appendFile('test.txt' , 'This is second line', function(err){
    if(err) throw err;
    console.log('file appended');
});
*/

/*rename file
var fs = require('fs');
fs.rename('test.txt' , 'renamed.txt', function(err){
    if(err) throw err;
    console.log('file renamed');
});
*/

/*delete file
var fs = require('fs');
fs.unlink('test.txt' , function(err){
    if(err) throw err;
    console.log('file deleted');
});
*/