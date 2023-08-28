import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { convertToEmbeddedUrl } from "../utils/ConvertUrl"
import { useNavigate } from 'react-router-dom';



function Recipe() {
    const [isLoading,setIsLoading] = useState(false)
    const [meal,setMeal] = useState([])
    const [ingredients,setIngredients] = useState([])
    const navigate = useNavigate()
    const params = useParams()

    const GetRecipeById = async (id) => {
        setIsLoading(true)
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        setMeal(data.meals[0])
        setIsLoading(false)
      }
    const handleExit=()=>{
      navigate(-1)
    }  
    useEffect(()=>{
        GetRecipeById(params.id)
    },[])

    if(isLoading){
        return(
          <div className="loading-screen">
            <div className="spinner"></div>
          </div>
        )
      }else{
        return (
            <div className="recipe_div">
              <div className="recipe_details">
                <div className="recipe_tumbnail">
                  <img src={meal.strMealThumb} alt="" />
                </div>
                <div className="recipe_info">
                  <div className="recipe_title">
                    <h1>{meal.strMeal}</h1>
                  </div>
                  <div className="recipe_instruction">
                    <p>{meal.strInstructions}</p>
                  </div>
                </div>
              </div>
              <div className="recipe_details2">
                <div className="ingredients">
                  <h2>Ingredient : </h2>
                  <ul>
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
                        const a = meal[`strIngredient${index}`];
                        if (a !== "" && a !== null) {
                          return <li key={index}>{a}</li>;
                        }
                        return null;
                      })}
                  </ul>
                </div>
                <div className="video">
                  <iframe width="560" height="315" src={convertToEmbeddedUrl(meal.strYoutube)} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen className="video_iframe"></iframe>
                </div>
              </div>
              <button className="exit_btn" onClick={handleExit}>Completed/Exit</button>
            </div>
            )   
      }
}

export default Recipe