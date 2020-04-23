import React, { Component } from 'react'

function SearchBeer () {
    
        return (
            <div>
                <p>dfsfsdf</p>
            </div>
        )

}



// function SearchBeer () => { 
//     ('form').on('submit', (event)=>{
//         event.preventDefault();

//         const userInput = ('input[type="text"]').val();
//         let url = "https://api.punkapi.com/v2/beers";
        
//         let fullUrl = url + userInput;

//         .ajax({
//             url: fullUrl
//         }).then( //<<<<<chains the then method
//             (data)=>{
//                 ('#name').html(data.name);
//                 ('#year').html(data.Year);
//                 // $('#rating').html(data.Rated);
//             }, 
//             ()=>{
//                 console.log("bad request");
//             }
//         );
//     }); 

export default SearchBeer