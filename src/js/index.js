import React from 'react'
import ReactDom from 'react-dom'
import Web3 from 'web3'
import Election from '../../build/contracts/Election.json'

class App extends React.Component {

    render() {
        return (
            <h1>Election Results</h1>
        )
    }
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
)