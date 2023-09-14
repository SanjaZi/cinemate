import { Route, Routes } from "react-router-dom";
import {MovieDetail, MovieList, Search, PageNotFound} from "../pages";


export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800 dark:border-black">
    <Routes>
        <Route path="/" element={<MovieList apipath={'now_playing'} title="Home"/>}/>
        <Route path="movie/:id" element={<MovieDetail/>}/>
        <Route path="movies/popular" element={<MovieList apipath={'popular'} title="Popular"/>}/>
        <Route path="movies/top" element={<MovieList apipath={'top_rated'} title="Top Rated"/>}/>
        <Route path="movies/upcoming" element={<MovieList apipath={'upcoming'} title="Upcoming"/>}/>
        <Route path="movies/search" element={<Search apipath={'search'} title="Search"/>}/>
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    </div>
  )
}
