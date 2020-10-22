const http = new easyHttp;

//GET posts
// http.get('https://jsonplaceholder.typicode.com/posts', 
// function(err,response){
//    if(err) {
//     console.log(err);
//    } else {
//     console.log(response);
//    }
// });

// GET SINGLE post
// http.get('https://jsonplaceholder.typicode.com/posts/1', 
// function(err,response){
//    if(err) {
//     console.log(err);
//    } else {
//     console.log(response);
//    }
// });

// Create Data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

//CREATE post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(
//     err, post){
//         if(err) {
//              console.log(err);
//          } else {
//              console.log(post);
//          }
    
// });

// UPDATE post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, 
// function(err, post){
//     if(err) {
//        console.log(err);
//     } else {
//         console.log(post);
//     }
// });

//DELETE post
http.delete('https://jsonplaceholder.typicode.com/posts/1', 
function(err,response){
 if(err) {
 console.log(err);
    } else {
    console.log(response);
    }
});