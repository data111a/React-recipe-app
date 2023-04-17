import { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useQuery } from 'react-query'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default function Home() {
  const [randomMeal,setRandomMeal] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const getRandomMeal = async () =>{
    setIsLoading(true)
    const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
    setRandomMeal(data.meals[0])
    setIsLoading(false)
  }
  const { data } = useQuery('randomMeal', getRandomMeal);
  
  if(isLoading){
    return(
      <div className="loading-screen">
        <div className="spinner"></div>
      </div>
    )
  }else{
    return(
      <div className='home'>
        <div className='random_meal'>
          <h3>Random meal : </h3>
          <NavLink to={`/recipe/${randomMeal?.idMeal}`}>
            <div className='random_meal_div'>
              <Card title={randomMeal?.strMeal} imageUrl={randomMeal?.strMealThumb}/>
            </div>
          </NavLink>
        </div>
      </div>
    )
  } 
}
