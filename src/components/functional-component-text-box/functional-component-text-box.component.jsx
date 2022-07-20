// import { Component } from "react";

const TextBox = (props) => {
    console.log('Render TextBox');

    const { placeholder } = props;
    console.log(placeholder);
    
    return (
        <div>
            <input type='text' placeholder={ placeholder }></input>
        </div>
    );
}

export default TextBox;