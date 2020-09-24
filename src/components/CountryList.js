import React, { Component } from 'react'
import Data from '../Data'
import {Link} from 'react-router-dom'
import CountryCard from './CountryCard'
import axios from 'axios'
export default class CountryList extends Component {
    state={
        countries: []
    }
    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(rsp => {
            this.setState({countries:rsp.data})
        })
    }

     searchHandler = (e) => {
        axios.get('https://restcountries.eu/rest/v2/name/'+e.target.value)
        .then(res=>{
            this.setState({
                countries : res.data
            })
        })
    }

    render() {
const countryList = this.state.countries .map((ct) => {
    return(
       <CountryCard country={ct} key={ct.numericCode}/>
      
    )
})
    return(
        <div className="container">
            
        <input type="text" className="form-control mt-3 mb-3" onChange={this.searchHandler} placeholder="Ülke Adı Giriniz"></input>
       
       <div className="card-columns">
           {countryList}
       </div>
        </div>
    )

    }
}
