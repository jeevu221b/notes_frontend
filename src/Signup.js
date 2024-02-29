import { useState } from "react"

const SignUpForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username, password)

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
            <br></br>
            <button type="submit">SignUp</button>
            {/* <button type='button'>Login</button>     */}

        </form >
    )
}

export { SignUpForm }