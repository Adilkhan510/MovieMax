import React from 'react'
import { Paper } from '@material-ui/core'

export const MovieCard = (props) => {
    return (
        <a href={`/movies/${props.id}`}>
            <Paper style={{width:"100%", height : "100%"}} >
                <img src={props.movieUrl} style={{width:"100%",height:"390px"}} />
            </Paper>
        </a>
    )
}