import React, { Component } from 'react'
import $ from 'jquery'

export default class SearchBeer extends Component {
    constructor(props){
        super(props);

        this.state={
            search:""
        }


        $(() => {
            $('form').on('submit', (event)=>{
                event.preventDefault();
        
                const userInput = $('input[type="text"]').val();
                let url = "https://api.punkapi.com/v2/beers";
                
                let fullUrl = url + userInput;
        
                $.ajax({
                    url: fullUrl
                }).then( //<<<<<chains the then method
                    (data)=>{
                        $('#name').html(data.name);
                    }, 
                    ()=>{
                        console.log("bad request");
                    }
                );
            }); 
        });
    }


    render() {
        let name = document.getElementById('name');
        let $name = $('#name');
        return (
            <div>
            <form>
                <input type="text" placeholder="Beer Name"></input>
                <input type ="submit" value="Get Beer Info"></input>
            </form>
                <dl>
                    <dt>Beer Name:</dt>
                    <dd id="name"></dd>
                    <dt> Description</dt>
                </dl>
            </div>
        )
    }
  
}