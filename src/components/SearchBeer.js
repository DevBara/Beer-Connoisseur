import React, { Component } from 'react'
import $ from 'jquery'

export default class SearchBeer extends Component {
    constructor(props){
        super(props);

        this.state={
            search:""
        }
        
        this.searchBeer()

    }

    searchBeer(){
        console.log("Perform search")
        const url= 'https://api.punkapi.com/v2/beers'
        $.ajax({
            url: url,
            success(searchResults) {
                console.log("search bar works")
            },
            error:(xhr,status,err) => {
                console.error("search FAILED")
            }
        })
    }


    render() {
      
        return (
            <div>

            </div>
        )
    }
  
}