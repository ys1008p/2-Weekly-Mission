import { useEffect, useState } from "react";

const useFetch = (resource, opts = {}) => {
  if (!resource){
    return;
  }
  const [state, setState] = useState({
   loading: true,
   error: false,
   data: null, 
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now())
  }
  useEffect(() => {
    fetch(resource, opts)
      .then(data => {
        setState({
          ...state,
          loading: false,
          data,
        })
      })
      .catch(error => {
        setState({...state, loading: false, error})
      })
  }, [trigger])

  return {...state, refetch}
}


export default useFetch;
