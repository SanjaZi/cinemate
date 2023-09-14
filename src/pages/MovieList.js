import {Card} from '../components';
import { useFetch } from '../hooks/useFetch';
import { useTitle } from '../hooks/useTitle';

export const MovieList = ({apipath, title}) => {

const {data: movies} = useFetch(`https://api.themoviedb.org/3/movie/${apipath}?language=en-US&page=1`);

useTitle(title);




  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
        {movies.map((movie) => 

        (<Card title={movie.title} key={movie.id} overview={movie.overview} imgurl={movie.poster_path} id={movie.id}/>)
        
        )}
        
        </div>
      </section>
    </main>
  )
}
