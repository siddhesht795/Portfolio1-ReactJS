import React from "react"
import "./Project.css"

export default function Project(props) {

    let tttcolor= props.styles.textColor2;

    let tech = props.dets.techUsed.map(item => {
        return(
            <p style={
                {boxShadow: props.styles.techBoxShadow,
                backgroundColor: props.styles.bgColor2,
                color: props.styles.textColor2,
                borderColor: props.styles.techBoxBorder
            }
            }>{item}</p>
        )
    })

    return(
        <div className="project" style={
            {backgroundColor: props.styles.bgColor,
            border: props.styles.border,
            boxShadow: props.styles.projShadow}}>
            

            <img className="projImage" src={props.dets.projImage} 
                style = {
                {border: props.styles.border}
            } />


            <div className="projDetails">

                <a className="title" href={props.dets.webURL}
                    style = {
                        {color: props.styles.textColor1}
                    }>{props.dets.projName}</a>
                
                <div className="techUsed">
                    {tech}
                </div>

                <div className="description" style = {
                {color: props.styles.textColor1}}>
                    
                    <p>{props.dets.description}</p>
                </div>

                <div className="viewCode">

                    <a href={props.dets.code} style = {
                        {color: props.styles.textColor2}}>View Code in github</a>
                </div>
            </div>
        </div>
    )
}
