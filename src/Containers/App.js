import React, {Component} from "react";
import {robots} from "../Components/robots";
import CardList from "../Components/CardList";
import Search from '../Components/Searchbox'
import './App.css'
import Scroll from "../Components/Scroll";
import ErrorBoundry from "../Components/ErrorBoundry";


class App extends Component {
    constructor() {
        console.log('1')
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        console.log('2')
        fetch('http://jsonplaceholder.typicode.com/users').then(response => {
            response.json()
        }).then(users => {
            this.setState({robots: robots})
        })
    }

    Action = (change) => {
        console.log('3')
        this.setState({searchField: change.target.value})
    }

    render() {
        const {robots, searchField} = this.state
        console.log('4')
        const results = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return (!robots.length) ? (<h3 className={'tc'}>Loading...</h3>) : (
            <div className={'tc'}>
                <h1 className={'f3'}>Robots</h1>
                <Search action={this.Action}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={results}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    }
}

export default App