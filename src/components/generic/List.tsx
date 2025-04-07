// T is used to define a generic type that can be used for any type of data
import React from 'react';

type ListProps<T> = {
    items:T[]  // array of items of type T
    onClick: (value: T) => void;
}


// T is passed as a empty object to allow any type of data to be passed in
export const List = <T extends object>({ items, onClick }: ListProps<T>) => {
    return(
        <div>
            <h2>List of Items</h2>
            {items.map((item,index)=>{
                return (
                    <div key = {index} onClick={()=>
                        onClick(item) }>
                        {
                            // if item is a object, convert it to string using JSON.stringify
                            typeof item === 'object' ? JSON.stringify(item) : item
                        }

                    </div>
                )
            })}
        </div>
    )
}