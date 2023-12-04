function useAsync(baseUrl, folderId, path, userId){
  const wrappedFunction = async () => {
    try{
      const respones = await fetch(`https://bootcamp-api.codeit.kr/api${baseUrl}${folderId}${path}${userId}`);

      if(!respones.ok) throw new Error('데이터를 불러오는데 실패했습니다');

      const result = await respones.json();
      return result;
    }catch(error){
      console.log(error)
    }
  }
  return [wrappedFunction];
}

export default useAsync;
