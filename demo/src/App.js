import React, { Component } from 'react'
import ProgressArc from 'progress-arc-component'
import styled from 'styled-components'
import './Demo.css'


class Default extends Component {
  state = {
    prog: 50
  }

  render() {
    let { prog } = this.state

    return (
      <div className="col demo">
        <h3>Default</h3>
        <ProgressArc value={prog}/>
        <input
          type="range"
          min="0" max="100"
          value={prog}
          onChange={e => this.setState({prog: e.target.value})}
        />
      </div>
    )
  }
}


// ProgressArc is a styled component and can easily be restyled

const StyledProgressArc = styled(ProgressArc)`
  height: 12em;
  width: 12em;
  border: 0.3em solid black;
  border-radius: 0.5em;
  padding: 1em;
  circle {
    stroke: red;
  }
  text {
    fill: black;
  }
`

class Yellow extends Component {
  state = {
    prog: 60
  }

  render() {
    let { prog } = this.state

    return (
      <div className="col demo">
        <h3>Styled</h3>
        <StyledProgressArc value={prog}/>
        <input
          type="range"
          min="0" max="100"
          value={prog}
          onChange={e => this.setState({prog: e.target.value})}
        />
      </div>
    )
  }
}

// You can pass max and unit values

class Memory extends Component {
  state = {
    prog: 60
  }

  render() {
    let { prog } = this.state

    return (
      <div className="col demo">
        <h3>Custom units</h3>
        <ProgressArc value={prog} max={64} unit="GB"/>
        <input
          type="range"
          min="0" max="64"
          value={prog}
          onChange={e => this.setState({prog: e.target.value})}
        />
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div className="row">
        <Default/>
        <Yellow/>
        <Memory/>
      </div>
    )
  }
}

export default App
