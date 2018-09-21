import React from 'react'
import ReactDom from 'react-dom'
import Web3 from 'web3'

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