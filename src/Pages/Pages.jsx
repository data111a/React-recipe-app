import { Routes,Route } from "react-router-dom"
import Home from "./Home"
import Recipe from "./Recipe"
import ResultByCategory from "./ResultByCategory"
import ResultOfSearch from "./ResultOfSearch"

export default function Pages() {
  return (
    <Routes>
        <Route path="/React-recipe-app" element={<Home />}/>
        <Route path="/React-recipe-app/category/:area" element={<ResultByCategory />}/>
        <Route path="/React-recipe-app/recipe/:id" element={<Recipe />}/>
        <Route path="/React-recipe-app/search/:name" element={<ResultOfSearch />} />
    </Routes>
  )
}
