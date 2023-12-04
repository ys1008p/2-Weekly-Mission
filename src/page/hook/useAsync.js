import { useState } from "react";

function useAsync(baseUrl){
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const wrappedFunction = async () => {
    try{
      setError(null);
      setLoading(true);

      const respones = await fetch(`https://bootcamp-api.codeit.kr/api${baseUrl}`);
      if(!respones.ok) throw new Error('데이터를 불러오는데 실패했습니다');
      
      const result = await respones.json();
      return result;
    }catch(error){
      setError(error);
    }finally{
      setLoading(false);
    }
  }
  return [loading, error, wrappedFunction];
}

export default useAsync;
