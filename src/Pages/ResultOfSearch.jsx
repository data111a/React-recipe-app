import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import axios from "axios"
import { Card } from "../Components/Card"


export default function ResultOfSearch() {
    const [resultOfSearch,setResultOfSearch] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const params = useParams()
    const GetResultOfSearch = async (name) => {
        setIsLoading(true)
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        setResultOfSearch(data.meals)
        setIsLoading(false)
    }
    useEffect(()=>{
        GetResultOfSearch(params.name)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },[params.name])
    
    if(isLoading){
        return(
          <div className="loading-screen">
            <div className="spinner"></div>
          </div>
        )
      }else{
        if(resultOfSearch == null){
            return <center style={{marginTop:'100px'}}><h1>404 ERROR <br></br> There is no such meal in our database</h1></center>
        }else{
            return (
              <div style={{display:'flex',alignItems:'center',justifyContent:'center'}} className="result">
                  <div className="result_div">
                      {resultOfSearch?.map((Meal)=>{
                          return(
                              <NavLink to={`/recipe/${Meal.idMeal}`} style={{textDecoration:'none'}}  key={Meal.idMeal}>
                                  <Card title={Meal.strMeal} imageUrl={Meal.strMealThumb}/>
                              </NavLink>
                          )
                      })}
                  </div>
              </div>
            )
        }
      }
}

