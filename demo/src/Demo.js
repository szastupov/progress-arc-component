import React, { Component } from 'react'
import ProgressArc from 'progress-arc-component'
import styled from 'styled-components'
import './Demo.css'

const Code = ({text}) => (
  <pre className="code">
    {text}
  </pre>
)


class Default extends Component {
  state = {
    prog: 50
  }

  render() {
    let { prog } = this.state

    return (
      <div className="col-md-4 demo">
        <h3>Default</h3>
        <ProgressArc value={prog}/>
        <input
          type="range"
          min="0" max="100"
          value={prog}
          onChange={e => this.setState({prog: e.target.value})}
        />
        <Code text="<ProgressArc value={prog}/>"/>
      </div>
    )
  }
}


// ProgressArc is a styled component and can easily be restyled

const RedArc = styled(ProgressArc)`
  height: 12em;
  width: 12em;
  border: 0.3em solid black;
  border-radius: 0.5em;
  padding: 1em;
`

// TODO: figure out something to avoid code duplication
const styledCode = `// With styled-components
const RedArc = styled(ProgressArc)\`
  height: 12em;
  width: 12em;
  border: 0.3em solid black;
  border-radius: 0.5em;
  padding: 1em;
\`

// By passing common props
<RedArc
  value={prog}
  arcColor="red"
  textColor="black"
  rounded={true}
/>
`

class Custom extends Component {
  state = {
    prog: 60
  }

  render() {
    let { prog } = this.state

    return (
      <div className="col-md-4 demo">
        <h3>Styled</h3>

        <RedArc
          value={prog}
          arcColor="red"
          textColor="black"
          rounded={true}
        />

        <input
          type="range"
          min="0" max="100"
          value={prog}
          onChange={e => this.setState({prog: e.target.value})}
        />
        <Code text={styledCode}/>
      </div>
    )
  }
}

// You can pass max and unit values

const unitsCode = `<ProgressArc
  value={prog} max={64} unit="GB"/>`

class Memory extends Component {
  state = {
    prog: 60
  }

  render() {
    let { prog } = this.state

    return (
      <div className="col-md-4 demo">
        <h3>Custom units</h3>
        <ProgressArc value={prog} max={64} unit="GB"/>
        <input
          type="range"
          min="0" max="64"
          value={prog}
          onChange={e => this.setState({prog: e.target.value})}
        />
        <Code text={unitsCode}/>
      </div>
    )
  }
}


class Demo extends Component {
  render() {
    return (
      <div>

        <div className="row">
          <Code text={"import ProgressArc from 'progress-arc-component'"}/>
        </div>

        <div className="row">
          <Default/>
          <Custom/>
          <Memory/>
        </div>
      </div>
    )
  }
}

export default Demo
