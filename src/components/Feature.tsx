import React from "react";
import { TestPros } from "../../types/Test";

const Feature= (props:TestPros)=>{
    return (
        <div>
            <h1>새로운 파일 추가</h1>
            {props.info.name} <br/>
            {props.info.age} <br/>

        </div>
    );
}

export default Feature;