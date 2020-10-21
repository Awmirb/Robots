import React, {Component} from "react";

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        // this.state.hasError = true
        this.setState({hasError: true})
    }

    render(){
        return (this.state.hasError) ? (
            <h1>Loading Failed, Try Again!</h1>
        ) : (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default ErrorBoundry