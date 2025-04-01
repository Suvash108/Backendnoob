const fs = require('fs');

// fs.writeFile("heytext","yeha mei maazza kraha tum bhi aajao tuhme bhi mazza ayega brother",function(err)
// {
//     if(err) console.error(err)
//     else console.log("Done!!!!!!!!!")
// })
// fs.appendFile("heytext", " mai toh abba kuch phodd dunga brother tumhara kya hai plan bolo thoda bistarrr mei", function(err)
// {
//     if (err) console.error(err)
//     else console.log("chalo ye bhi hogaya")
// })

// fs.rename("heytext","hey.txt",function(err)
// {
//     if(err) console.error(err)
//     else console.log("Rename hogaya budyy")
// })

// // fs.copyFile("hey.txt", "chacha.txt", function(err)
// // {
// //     if(err) console.error(err)
// //     else console.log("Copy bhi  hogaya budyy")
// // })

// fs.unlink("chacha.txt",function(err)
// {
//     if(err) console.error(err)
//     else console.log("Rename hogaya budyy")
// })
const dirPath = './newFolder';

// Create the directory
fs.mkdir(dirPath, { recursive: true }, (err) => {
    if (err) {
        console.error('Error creating directory:', err);
    } else {
        console.log('Directory created successfully!');
   
    }
});