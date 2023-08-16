import React from 'react'
import CardList from './CardList'
import {robots} from './robots'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: {robots},
            searchfield: ''
        }
    }

    render() {
        return (
            <div>
                <CardList robots={this.state.robots} />
            </div>
        )
    }
}

export default App
