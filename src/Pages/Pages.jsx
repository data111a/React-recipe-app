import { Routes,Route } from "react-router-dom"
import Home from "./Home"
import Recipe from "./Recipe"
import ResultByCategory from "./ResultByCategory"
import ResultOfSearch from "./ResultOfSearch"
import { myContext } from "../context/myContext"
import { useContext } from "react"


export default function Pages() {
  const { theme,changeTheme } = useContext(myContext)
  console.log(theme);
  return (
    <Routes>
        <Route path="/React-recipe-app" element={<Home />}/>
        <Route path="/React-recipe-app/category/:area" element={<ResultByCategory />}/>
        <Route path="/React-recipe-app/recipe/:id" element={<Recipe />}/>
        <Route path="/React-recipe-app/search/:name" element={<ResultOfSearch />} />
    </Routes>
  )
}
