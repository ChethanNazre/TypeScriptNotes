type StatusProps = {
    status: string
}


export const Status =(props:StatusProps) =>{
    let message
    if(props.status === 'loading'){
        message = 'Loading...'
    }
    else if(props.status === 'success'){
        message = 'Data Fetched Successfully'
    }
    else if(props.status === 'error'){
        message = 'Error Fetching Data'
    }
return(
    <div>
        <h2> Status - {message} </h2>
    </div>
)
}