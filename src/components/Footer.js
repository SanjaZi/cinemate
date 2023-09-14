
import {NavLink} from "react-router-dom";

export const Footer = () => {
  return (      
<footer className="bg-white shadow m-4 dark:bg-gray-800 dark:m-0 dark:border-neutral-950 ">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <NavLink to="/" className="hover:underline">Cinemate</NavLink>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <NavLink to="#" className="mr-4 hover:underline md:mr-6 ">Instagram</NavLink>
        </li>
        <li>
            <NavLink to="#" className="mr-4 hover:underline md:mr-6">Facebook</NavLink>
        </li>
        <li>
            <NavLink to="#" className="mr-4 hover:underline md:mr-6">Youtube</NavLink>
        </li>
        <li>
            <NavLink to="#" className="hover:underline">Contact</NavLink>
        </li>
    </ul>
    </div>
</footer>
  )
}
