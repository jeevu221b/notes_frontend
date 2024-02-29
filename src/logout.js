const handleLogout = async (token) => {
    const url = "http://localhost:8000/api/logout/"
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
            }
        })
        const data = await response.json()
        console.log(data)
        if (data.sucess) {
            localStorage.removeItem('token')
            console.log("LOGGED OUT SUCESSFULLY")
            return true
        } else {
            console.log("LOGOUT FAILED")
        }
    } catch (error) {
        console.log("ERROR", error)
    }
}

export { handleLogout }