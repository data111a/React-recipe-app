import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import axios from "axios"
import { Card } from "../Components/Card"


export default function ResultByCategory() {
    const [resultByCategory,setResultByCategory] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const params = useParams()
    const GetResultByCategory = async (area) => {
        setIsLoading(true)
        if(localStorage.getItem(area)){
            setResultByCategory(JSON.parse(localStorage.getItem(area)))
        }else{
            const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
            localStorage.setItem(area,JSON.stringify(data.meals))
            setResultByCategory(data.meals)
        }
        setIsLoading(false)
    }
    useEffect(()=>{
        GetResultByCategory(params.area)
    },[params.area])
    if(isLoading){
        return(
          <div className="loading-screen">
            <div className="spinner"></div>
          </div>
        )
      }else{
          return (
              <div style={{display:'flex',alignItems:'center',justifyContent:'center'}} className="result">
                  <div className="result_div">
                      {resultByCategory.map((Meal)=>{
                          return(
                              <NavLink to={`/React-recipe-app/recipe/${Meal.idMeal}`}  key={Meal.idMeal}>
                                  <Card title={Meal.strMeal} imageUrl={Meal.strMealThumb}/>
                              </NavLink>
                          )
                      })}
                  </div>
              </div>
          )
      }
}

