import React from "react";
import { TestPros } from "../../types/Test";

const Test= (props:TestPros)=>{
    return (
        <div>
            <h1>수정</h1>
            {props.info.name} <br/>
            {props.info.age} <br/>

        </div>
    );
}

export default Test;