import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
export default function Spinner(props) {
    return (
        <div className="ui active dimmer">
           <div className="ui big text loader">{props.message}</div>             
        </div>
    )
}

Spinner.defaultProps={
    message:"loading....."
}
