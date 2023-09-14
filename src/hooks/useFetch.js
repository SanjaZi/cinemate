
import { useState, useEffect} from "react";

export const useFetch = (url) => {
const [data, setData] = useState([]);

useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTk5NjgxZjVlNTY5Yzg4NDM2NTI1YjE2OTM0OTk0OCIsInN1YiI6IjY0MTA0OTlmMzIzZWJhMDA3Y2I4MmVkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xWp_e4ys9vEE0d6lLFda_ftfaL9JBwo7qfV7YZAOYyI'
      }
    };
    
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
          console.log(json); // Log the fetched data
          setData(json.results); // Update the movies state with fetched data
        })
        .catch(err => console.error(err));
    }, [url]);


  return {data}
}
