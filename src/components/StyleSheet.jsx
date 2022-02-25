import React from 'react';
import './MyStyle.css'
function StyleSheet(props) {
    const className=props.primary?"primary": ""
    return (<div><h1 className={className}>prajwal</h1></div>);
}

export default StyleSheet;
