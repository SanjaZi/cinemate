import { useSearchParams } from 'react-router-dom';
import {Card} from '../components';
import { useFetch } from '../hooks/useFetch';
import { useTitle } from '../hooks/useTitle';


export const Search = ({apipath, title}) => {


const [searchParams] = useSearchParams();
const queryTerm = searchParams.get('query');

const {data: movies} = useFetch(`https://api.themoviedb.org/3/search/movie?query=${queryTerm}&include_adult=false&language=en-US&page=1, options`);

useTitle(title);



  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
        {movies.map((movie) => 

        (<Card title={movie.title} key={movie.id} overview={movie.overview} imgurl={movie.poster_path} id={movie.id} />)
        
        )}
        
        </div>
      </section>
    </main>

  )
}
