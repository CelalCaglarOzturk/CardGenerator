import { useEffect, useState } from "react"


const useFetch = (url: string) => {
      const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(() => {    
      const abortControl = new AbortController()
    fetch(url, {signal: abortControl.signal})
      .then(res => {
        
        if(!res.ok){
            throw Error('Could not fetch the data for that resource')
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setIsLoading(false)
        setError(null)
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
        setError(err.message);
        setIsLoading(false)
      }
      })
      return () => abortControl.abort()
  }, [url])
return { data, isLoading, error }
}
export default useFetch