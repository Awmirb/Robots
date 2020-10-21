import React, { Component } from 'react';
import './NewApp.css';


const NewApp = (props) => {
    return (
        <div className="f1 tc">
            <h1>Hello World</h1>
            <p>Welcome</p>
            <p>{props.details}</p>
        </div>
    );
}
// class NewApp extends React.Component {
//     render() {
//         return (
//             <div className="f1 tc">
//                 <h1>Hello World</h1>
//                 <p>Welcome</p>
//                 <p>{this.props.details}</p>
//             </div>)
//     };
// }


export default NewApp;

