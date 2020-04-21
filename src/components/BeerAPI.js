import React, { Component } from 'react'
import axios from 'axios'


export default class BeerAPI extends Component {
    constructor(props){
        super(props);

        this.state ={
            data:[],
        }



        async function getData() {
            try {
                const response = await axios.get('https://api.punkapi.com/v2/beers');
                console.log(response);
            } catch(error);
            console.error(error);
        
        }
    }


    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
