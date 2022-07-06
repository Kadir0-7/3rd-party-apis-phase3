import './style.css'




const url =('https://picsum.photos/v2/list?page=2&limit=100')
fetch(url) .then( response=> {
console.log(response)
return response.json();
})
.then(list => {
  let randomNum = Math.floor(Math.random() *list.length);
 console.log(list[randomNum])
 const info= list[randomNum]
 let picture = "";
 
 list.map(value =>{
   picture = `<h1>Random picture</h1><img src=${info.download_url} alt="img" height="500px" weight=""500px id="imgs">
   <p id="img-id">Image ID:${info.id}</p>
   <p id="author">Author:${info.author}</p>
   `;
   console.log(picture);
  
 })
 document.querySelector('#app').innerHTML = picture;
})

.catch(err => {
  console.log(err)
})