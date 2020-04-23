import React, { Component } from 'react'
import axios from 'axios'


export default class BeerLocator extends Component {
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

//get api requests

    async callApi(){
        try {
            const response = await axios.get('https://api.punkapi.com/v2/beers');
//How Data should be rendered
            let beerList = response.data.map(beer =>
               <div key={beer["id"]}>
                    <img src={beer["image_url"]} height="150px" width="100%" />
                    <h4>Beer Name: {beer["name"]}</h4>
                    {/* <h5>First Brewed: ({["first_brewed"]}</h5> */}
                    <h5>Tagline: {beer["tagline"]}</h5>
                    <h5>What foods go great with this beer: {beer["food_pairing"]}</h5>
                    <h3>Alcohol content: {beer["abv"]}%</h3>
                    <p>Description{beer["description"]}</p>
                </div>);
//Change state once data is received 
                this.setState({
                    beers:response.data,
                    beersHTML: beerList
                })
//Catch any errors 
            }   catch (error){
                console.error(error);
            }

           
    }
    render() {
        return (
            <div className="beerParent">
                <div className="beerChild">
                    {this.state.beersHTML}
                </div>

            </div>
        )
    }
}
