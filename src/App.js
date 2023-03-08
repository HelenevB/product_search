import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ProductList from './productList/ProductList.js';
import './App.css';
import SearchBar from './searchBar/SearchBar.js';
import Location from './location/Location.js';

export default function App() {

const [attractionList , setAttractionList] = useState([]);

const [searchValue , setSearchValue] = useState("")
const [location  , setLocation] = useState('en')
const [currency, setCurrency] = useState([]);
const [loading, setLoading] = useState();

  useEffect(() => {

    loadAttractions(location, searchValue)
   

  },[location , searchValue])

const loadAttractions = (location, searchValue) => {
  setLoading(true)
  axios.get(`https://global.atdtravel.com/api/products?geo=${location}&title=${searchValue}`)
   .then(response =>{
   
    setAttractionList(response.data.data)
    setSearchValue(searchValue)
    setCurrency(response.data.meta);
    setLocation(location);
    setLoading(false)
     })
    .catch(error => {
      console.log(error)
    })
  
  
}

  return (
    <div id="main-page">
    <nav id="navbar">
      <h1 id="pagehead">Product Search </h1>
      <Location
        loadAttractions={loadAttractions}
        location={location}
        searchValue={searchValue}
      ></Location>
      </nav>
    
    
      <SearchBar loadAttractions={loadAttractions} location={location}></SearchBar>
     <ProductList attractionList={attractionList} searchValue={searchValue} currency={currency} location={location} loading={loading} ></ProductList>
    </div>
  );
 }



//  const loadAttractions = (location, searchValue) => {
//   axios.get(`https://global.atdtravel.com/api/products?geo=${location}`)
//     .then(response => {
//     setAttractionList(response.data.data)
//     setCurrency(response.data.meta);
//     setLocation(location);
//     })
//     .catch(error => {
//       console.log(error)
//     })
// }

// // const filteredAttractions = ( location, searchValue ) => {
 
// //   axios.get(`https://global.atdtravel.com/api/products?geo=${location}&title=${searchValue}&limit=5`)
// //     .then(response => {
// //     setSearchValue(searchValue)
// //     setfilteredAttractionList(response.data.data)
// //     setCurrency(response.data.meta);
// //     setLocation(location);
// //     })
// //     .catch(error => {
// //       console.log(error)
// //     })
// // }


//  <div id="main-page">
//  <nav id="navbar">
//    <h1 id="pagehead">Product Search </h1>
//    <Location
//      filteredAttractions={filteredAttractions}
//      loadAttractions={loadAttractions}
//      location={location}
//      searchValue={searchValue}
//    ></Location>
//    </nav>
 
 
//    <SearchBar filteredAttractions={filteredAttractions} location={location}></SearchBar>
//   <ProductList attractionList={attractionList} filteredAttractionsList={filteredAttractionsList} searchValue={searchValue} currency={currency} location={location} ></ProductList>
//  </div>