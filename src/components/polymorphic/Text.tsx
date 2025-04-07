import React from 'react'

type TextOwnProps<E extends React.ElementType> = {
    size?: 'small' | 'medium' | 'large'
    color?: 'red' | 'green' | 'blue'
    children: React.ReactNode
    as?: E 
}
type TextProps<E extends React.ElementType> = TextOwnProps<E> & Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>
 // This allows you to pass any props that a 'div' element would accept

export const Text =<E extends React.ElementType = 'div'> ({size, color, children, as}: TextProps<E>) => {
    const Component = as || 'div'
    return <Component className={`class-with-${size}-${color}`}>{children}
    </Component>
}