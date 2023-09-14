import {NavLink} from "react-router-dom";
import Backup from '../assets/images/backup.png'

export const Card = ({title, overview, imgurl, id}) => {

const image = imgurl ? `https://image.tmdb.org/t/p/w500/${imgurl}` : Backup;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
    <NavLink to={`/movie/${id}`}>
        <img className="rounded-t-lg" src={image} alt="" />
    </NavLink>
    <div className="p-5">
        <NavLink to={`/movie/${id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </NavLink>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">{overview}</p>
    </div>
</div>

  )
}
