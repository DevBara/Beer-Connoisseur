import React, { Component } from 'react'
import axios from 'axios'
import $ from 'jquery'
// import SearchBeer from './SearchBeer'


export default class BeerLocator extends Component {
    constructor(props){
        super(props);

        this.state = {
            beers: '',
            beersList: '',
                name:"",
                tagline:"",
                food_pairing:"",
                description: "",
                image_url: "",
                first_brewed: "",
            search: '',
        }
        //if any bindings put in this area
    }

//Use jquery to create a search function attached to API link
//Function works, challenge: connect it to search bar

    // searchBeer(){
    //     const apiUrl= 'https://api.punkapi.com/v2/beers'
    //     $.ajax({
    //         url: apiUrl,
    //         success(searchResults)  {
            
    //             const results = searchResults
    //             let beerRows =[]

    //             results.forEach((beer) =>{
    //                 beerRows.push()
    //             })
    //         },
    //         error:(status,err) => {
    //             console.error("search FAILED")
    //         }
    //     })
    // } 
   
    componentDidMount(){
        this.getBeers()
        // this.SearchBeer();
    }

    async getBeers(){
        try {
            const response = await axios.get('https://api.punkapi.com/v2/beers');
            console.log(response)
//How Data should be rendered
// Let beerList = data then map that data as so
            let beerList = response.data.map(beer =>
               <div key={beer["id"]}>
                    <ul>
                        <li>
                            <img className= "dataImg" src={beer["image_url"]} alt="beer"/>
                        </li>
                        <li>
                            <h2>Name: {beer["name"]}</h2>
                        </li>
                        <h4>Description: {beer["description"]}</h4>
                        <h5>Tagline: {beer["tagline"]}</h5>
                        <h5>What foods go great with this beer: {beer["food_pairing"]}</h5>
                        <h5>Alcohol content: {beer["abv"]}%</h5>
                    </ul>
                </div>);
//Change state once data is received 
                this.setState({
                    beers:response.data,
                    beersList: beerList
                })
//Catch any errors 
            }   catch (error){
                console.error(error);
            }
    }

//To allow search option to work. Need to create an event
//On search click
//Change state >>>this.setState
// this.state search changes on event

    render() {

        return (
            <div className="beerParent">

                <div className="searchContainer">
                    <input className="searchBox" 
                        type="text" 
                        placeholder="Search Here" 
                        value={this.state.value}
                    />
                </div>
                
                <div className="beerChild">
                    {this.state.beersList}
                </div> 
            </div>
        )
    }
}