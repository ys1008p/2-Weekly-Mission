function redirectWithAuth(path){
    const existAccessToken = localStorage.getItem("accessToken")
    if(existAccessToken){
        location.assign(path)
    }
}

export default redirectWithAuth