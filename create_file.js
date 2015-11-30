var fs = require('fs');
fs.writeFile("D:/Domains/www.example.com/folder/testing/node/dynamicly_created_file.txt", "Hey there!", function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});