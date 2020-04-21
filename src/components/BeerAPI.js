import React, { Component } from 'react'
import axios from 'axios'

export default class BeerAPI extends Component {
    constructor(props){
        super(props);

        this.state = {
            beers: '',
            beersHTML: '',
                name:"",
                tagline:"",
                food_pairing:"",
                description: "",
                image_url: "",
                first_brewed: ""
        }
        //if any bindings put in this area
    }

    componentDidMount(){
        this.callApi();
    }


    async callApi(){
        try {
            const response = await axios.get('https://api.punkapi.com/v2/beers');
            console.log(response.data);
            console.log(response);

            let beerList = response.data.map(beer =>
               <div key={beer["id"]}>
                    <img src={beer["image_url"]} height="150px" width="100%" />
                    <h4>{beer["name"]} ({["first_brewed"]}</h4>)
                    <h5>{beer["tagline"]}</h5>
                    <h5>{beer["food_pairing"]}</h5>
                    <h3>{beer["abv"]}</h3>
                    <p>{beer["description"]}</p>
                </div>);
                this.setState({
                    beers:response.data,
                    beersHTML: beerList
                })
            }   catch (error){
                console.error(error);
            }

           
    }


    render() {
        
        return (
            <div>
                <div>{this.state.beersHTML}</div>
               




                            
            </div>
        )
    }
}
