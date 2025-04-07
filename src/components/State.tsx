import { useState } from "react"

export const LoggedIn = () => {
    // useState is a hook that allows you to add state to your functional components
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }
     return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User Is {isLoggedIn ? 'Logged In' : 'Logged Out'} </div>
        </div>
        )
    }

