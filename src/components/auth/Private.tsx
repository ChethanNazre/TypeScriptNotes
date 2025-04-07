import { Login } from "./Login";
import React from "react";
import { ProfileProps } from "./Profile";

type PrivateProps = {
    isLoggedIn: boolean
    component: React.ComponentType<ProfileProps>
}
//Component Props

export const Private = ({ isLoggedIn, component: Component}:PrivateProps) => { 
    if (isLoggedIn) {
        return <Component name = "CPT"/>
    } else {
        return <Login/>
    }
}