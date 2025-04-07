import { useState } from "react";

type AuthUser = {
    name : string
    email: string
}

export const User = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
        setUser
        ({
            name: 'CPT',
            email: 'CPT@gmail.com'
        })
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            {/* <button onClick={handleLogout}>Logout</button> */}
            <div>Username is {user.name}</div>
            <div>User email is {user.email}</div>
            <div>User is {user ? 'Logged In' : 'Logged Out'}</div>
        </div>
    )
}