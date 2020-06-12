const fs = require('fs');
const path = require('path');
// File System
// fs.mkdir(path.join(__dirname, "notes" ), (err) => {
//     if (err) throw err;
//     console.log('Dir is created')
// })

// fs.writeFile(path.join(__dirname, 'notes', 'my-notes.txt'),
//     "Hellow world", 
//     (err) => {
//         if (err) throw err;
//         console.log('File is sucessfully created!');
//         fs.appendFile(
//             path.join(__dirname, 'notes', 'my-notes.txt'),
//             ' From append file',
//             err => {
//                 if (err) throw err;
//                 console.log('File is sucessfully updated !');
//                 fs.readFile(
//                     path.join(__dirname, 'notes', 'my-notes.txt'),
//                     'utf-8',
//                     (err, data) => {
//                         if (err) throw err;
//                         console.log(Buffer.from(data).toString());
//                     }
//                  )
//             }
//         )
//     }
//  )

fs.rename(
    path.join(__dirname, 'notes', 'my-notes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    err => {
        if (err) throw err;
        console.log('File sucessfully renamed')
    }
)