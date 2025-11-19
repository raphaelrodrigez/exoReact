import React, { useEffect, useState } from 'react'
import Cards from './cards'

export default function NewApp(){
    const [search , setSearch] = useState("india")
    const [newsData, setNewData] = useState(null)
    const API_KEY = '7c907da1aeb84c4cb50b3770dc70e616'
    const getData = async()=>{
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
        const jsonData = await response.json()
        console.log(jsonData.articles)
        setNewData(jsonData.articles)
    }
    useEffect(()=>{
        getData()
    },[])
    const handleChange =(e)=>{
        console.log(e.target.value)
        setSearch(e.target.value)

    }
    const userInput =(e)=>{
        setSearch(e.target.value)
    }
    return(
        <div>
            <nav>
                <div>
                    <h1>Trendy news</h1>
                </div>
                <ul>
                    <li>
                        <a>All New</a>
                        <a>Trending</a>
                    </li>
                </ul>
                <div className='searchBar'>
                    <input type='text' placeholder='Search bar' value={search} onChange={handleChange}/>
                    <button onClick={getData}>Search</button>
                </div>
            </nav>
            <div >
                <p className='head'>Stay Update with TrendyNews</p>
            </div>
            <div className='categoryBtn'>
                <button onClick={userInput} value="sport">Sport</button>
                <button onClick={userInput} value="politics">Politics</button>
                <button onClick={userInput} value="entertaiment">Entertaiment</button>
                <button onClick={userInput} value="health">Entertaiment</button>
                <button onClick={userInput} value="fitness">Fitness</button>
            </div>
            <div className=''>
                <Cards data={newsData}/>
            </div>
        </div>
    )
}