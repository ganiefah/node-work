const fs = {
    writeFile,readFile, appendFile
} = require('fs')




// fs.writeFile('data.txt', 'Hello World!!!', error => {
// if (error) throw error;
// console.log('File data.txt is added');
//  });


// readFile('./data.txt', 'utf-8', (err,data)=>{
//     if (!err)
//     console.log(data);
//     else
//     console.log('Try Again');
// })



// fs.writeFile('./data.txt', 'Im Ganiefah', error => {
// if (error) throw error;
// console.log('New content added to data.txt');
//  });

//  readFile('./data.txt', 'utf-8', (err,data)=>{
//     if(!err)
//     console.log(data);
//     else
//     console.log('Sorry, Please try again');
//  })

// so when i added more data or content into the data.txt file it overrided the first content 

fs.appendFileSync('./data.txt', 'i appended it ');
 readFile('./data.txt', 'utf-8', (err,data)=>{
    if(!err)
    console.log('New Content Appended which is ' + data);
    else
    console.log('Sorry, Please try again');
 })