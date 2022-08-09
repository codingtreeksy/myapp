import React from "react";
import { TestPros } from "../../types/Test";

const Test= (props:TestPros)=>{
    return (
        <div>
            {props.info.name} <br/>
            {props.info.age} <br/>

        </div>
    );
}

export default Test;