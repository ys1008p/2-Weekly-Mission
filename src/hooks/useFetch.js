import { useEffect, useState } from "react";

const useFetch = (resource, opts = {}) => {
  console.log("useFetch실행됨")
  const [state, setState] = useState({
    loading: true,
    error: false,
    data: null, 
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState((state) => ({
      ...state,
      loading: true,
    }));
    setTrigger(Date.now())
  }
  useEffect(() => {
    if (!resource){
      return;
    }
    console.log("fetch()호출됨")
    fetch(resource, opts)
      .then(res => res.json())
      .then(data =>{
        setState((state) => ({
          ...state,
          loading: false,
          data,
        }))
        console.log("resolve됨")
      })
      .catch(error => {
        setState((state)=> ({...state, loading: false, error}))
        console.log("reject됨")
      })
  }, [trigger])

  return {...state, refetch}
}


export default useFetch;
