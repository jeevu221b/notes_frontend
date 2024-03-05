import React, { useContext, useState } from "react"
import { SignUpForm } from "./Signup"
import ThemeContext from "./ThemeContext"
import { apiRequest, backendRoutes } from "./utill"

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isSigned, setIsSigned] = useState(false)
    const [isToken] = useState(false)

    const { theme, isLoggedIn, setAuthToken, clearAuthToken } = useContext(ThemeContext);

    const handleSubmit = (event) => {
        event.preventDefault()
        login(username, password)
    }

    const Logout = () => {
        clearAuthToken()
    }

    const login = async (username, password) => {
        try {
            const response = await apiRequest(backendRoutes.LOGIN.url, backendRoutes.LOGIN.method, { username, password })
            let token = response.token
            setAuthToken(token)

        } catch (error) {
            console.log(error, "ERROR")
            alert(error)

        }
    }


    return (
        <div>
            {isLoggedIn && (
                <div>
                    <h1>Hurrah! You're already logged in!</h1>
                    <button type="button" onClick={Logout}>Logout</button>
                </div>
            )}

            {isSigned && (
                <div>
                    <SignUpForm />
                </div>

            )}

            {!isLoggedIn && !isToken && !isSigned && (
                <form onSubmit={handleSubmit}>
                    <label>
                        Username
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Password
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <br />
                    <button type="submit" style={{ background: theme === "light" ? "orange" : "pink" }}>Login</button>
                    <button type="button" onClick={() => setIsSigned(true)}>SignUp</button>

                </form>
            )}

        </div>
    )
}
export { LoginForm }