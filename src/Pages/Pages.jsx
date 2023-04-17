import { Routes,Route } from "react-router-dom"
import Home from "./Home"
import Recipe from "./Recipe"
import ResultByCategory from "./ResultByCategory"
import ResultOfSearch from "./ResultOfSearch"

export default function Pages() {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/category/:area" element={<ResultByCategory />}/>
        <Route path="/recipe/:id" element={<Recipe />}/>
        <Route path="/search/:name" element={<ResultOfSearch />} />
    </Routes>
  )
}
