import React, { Component } from 'react'
import axios from 'axios'
import $ from 'jquery'
import {search} from './utils'

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
            loading: false
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
        this.callApi();
    }

//get api requests using async

    search = async val => {
        this.setState({loading: true});
        const res = await search(
            'https://api.punkapi.com/v2/beers'
        );
        const beers = await res;

        this.setState({beers, loading: false});
};

    onChangeHandler = async e => {
        this.search(e.target.value);
        this.setState({value:e.target.value});
    };

    get renderBeers(){
        let beers = <h1>Where are the Beers!?</h1>;
        if(this.state.beers){
            beers = <beers list={this.state.beers} />;
        }
    }







    async callApi(){
        try {
            const response = await axios.get('https://api.punkapi.com/v2/beers');
//How Data should be rendered
//Let beerList = data then map that data as so
            let beerList = response.data.map(beer =>
               <div key={beer["id"]}>
                    <img className= "dataImg" src={beer["image_url"]} alt="beer"/>
                    <h2>Name: {beer["name"]}</h2>
                    <h4>Description: {beer["description"]}</h4>
                    <h5>Tagline: {beer["tagline"]}</h5>
                    <h5>What foods go great with this beer: {beer["food_pairing"]}</h5>
                    <h5>Alcohol content: {beer["abv"]}%</h5>
                    
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
                    <input className="searchBox" type="text" placeholder="Search Here" 
                        value={this.state.value}
                        onChange={e => this.onChangeHandler(e)}
                    />

                    {this.renderBeers}
                </div>
           
                {/* <div className="beerChild">
                    {this.state.beersList}
                </div> */}
          
            </div>
        )
    }
}
