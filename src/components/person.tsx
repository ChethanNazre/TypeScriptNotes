import { PersonProps } from "./Person.types";

export const Person =(props:PersonProps)=>{
    return <div>
        {props.name.fname} {props.name.lname}
    </div>
}
