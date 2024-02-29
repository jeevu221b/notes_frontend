import React, { useContext, useEffect, useState } from "react"
import { SignUpForm } from "./Signup"
// import { loggedIn } from "./loggedIn"
import { handleLogout } from "./logout"
import ThemeContext from "./ThemeContext"

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isSigned, setIsSigned] = useState(false)
    const [isToken, setIsToken] = useState(false)

    const { theme, isLoggedIn, setAuthToken, clearAuthToken } = useContext(ThemeContext);



    const handleSubmit = (event) => {

        event.preventDefault()
        // console.log("Login Button clicked")
        console.log(username, password)
        login(username, password)
    }

    const Logout = (event) => {
        clearAuthToken()
    }






    const login = async (username, password) => {
        const url = "http://localhost:8000/api/login/"
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),

            })
            const data = await response.json()
            let token = data.token
            if (!token) {
                throw new Error("Failed to login")
            }
            console.log(data)
            console.log(token, "TOKEN")
            setAuthToken(token)

        } catch (error) {
            console.log(error, "ERROR")
            alert(error)

        }
    }


    return (
        <div>
            {/* {istoken && <div>
                <h1>You're already logged in!</h1>
                <button type="button">Logout</button>

            </div>} */}
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
                    <button type="submit" style={{ background: theme == "light" ? "orange" : "pink" }}>Login</button>
                    <button type="button" onClick={() => setIsSigned(true)}>SignUp</button>

                </form>
            )}

        </div>
    )
}
export { LoginForm }