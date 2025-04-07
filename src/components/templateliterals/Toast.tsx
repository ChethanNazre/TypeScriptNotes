type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center'| 'bottom'

// using template literals to create a type
type ToastProps ={
    position:Exclude<`${HorizontalPosition}-${VerticalPosition}`,'center-center'>
    | 'center'
}

export const Toast = ({position}:ToastProps) =>
{
    return (
        <div>
            Toast Notification - {position}
        </div>
    )
}