import { useState } from "react"
import { apiRequest, backendRoutes } from "./utill"
import { useNavigate } from "react-router-dom"


const SignUpForm = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        signup(username, password)

    }

    const signup = async (username, password) => {
        try {
            await apiRequest(backendRoutes.SIGN_UP.url, backendRoutes.SIGN_UP.method, { username, password })
            navigate("/login")

        } catch (error) {
            alert(error)

        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <br></br>
            <label >
                Password
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </label>
            <br />
            <button type="submit">SignUp</button>

        </form >
    )
}

export { SignUpForm }