import React from "react";
import s from "./DisplayDifficulty.module.css";
function DisplayDiffculty(props)
{
    return(
        <div className={s.container1}>
            {props.difficulty ? `Difficulty is set to ${props.difficulty}` : "No difficulty is set"}
        </div>
    );
}
export default DisplayDiffculty