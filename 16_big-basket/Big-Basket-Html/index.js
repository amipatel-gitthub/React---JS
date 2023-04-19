// document.addEventListener('DOMContentLoaded', function() {
//   // everything else we type will go inside this!!  
//   const bookContainer = document.querySelector('#book-container')
//   const bookURL = `http://localhost:3004/Pr_Data`

//   fetch(`${bookURL}`)
//     .then( response => response.json() )
//     .then( bookData => bookData.forEach(function(book) {
//       bookContainer.innerHTML += `
//       <div id=${book.id}>
//         <h2>${book.title}</h2>
//         <h4>Author: ${book.author}</h4>
//         <img src="${book.coverImage}" width="333" height="500">
//         <p>${book.description}</p>
//         <button data-id="${book.id}" id="edit-${book.id}" data-action="edit">Edit</button>
//         <button data-id="${book.id}" id="delete-${book.id}" data-action="delete">Delete</button>
//       </div>`
//     })) // end of book fetch
// })

document.addEventListener('DOMContentLoaded', function() {
  // everything else we type will go inside this!!  
  const productContainer = document.querySelector('#product-container')
  const productURL = `http://localhost:3004/Pr_Data`

  fetch(`${productURL}`)
    .then( response => response.json() )
    .then( productData => productData.forEach(function(product) {
      productContainer.innerHTML += `
      <table>
      <div id=${product.id}>
        <h2>${product.Name}</h2>
        <h4>Price: ${product.Price}</h4>
        <h4>Qty: ${product.Qty}</h4>
        <h4>Category: ${product.Category}</h4> <br> 
      </div>
      `
    })) // end of book fetch
})



