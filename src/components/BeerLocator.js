import React, { Component } from 'react'
import axios from 'axios'
import $ from 'jquery'

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
            search: ''
        }
        //if any bindings put in this area

        this.searchBeer()

    }

    searchBeer(){
        console.log("Perform search")
        const apiUrl= 'https://api.punkapi.com/v2/beers'
        $.ajax({
            url: apiUrl,
            success(searchResults)  {
                console.log("search bar works")
            },
            error:(xhr,status,err) => {
                console.error("search FAILED")
            }
        })
    }
   
    componentDidMount(){
        this.callApi();
    }

//get api requests using async

    async callApi(){
        try {
            const response = await axios.get('https://api.punkapi.com/v2/beers');
//How Data should be rendered
//Let beerList = data then map that data as so
            let beerList = response.data.map(beer =>
               <div key={beer["id"]}>
                    <img className= "dataImg" src={beer["image_url"]} alt="picture"/>
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
{/* Need a bar and submit button for user to search through data */}
                    <input className="searchBox" type="text" placeholder="Search Here" ></input>
                    {/* <button>Search</button> */}
                </div>
           
                <div className="beerChild">
                    {this.state.beersList}
                </div>
          
            </div>
        )
    }
}
