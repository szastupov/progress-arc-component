# Simple progress arc component for React

## Installation

    yarn add progress-arc-component

## Usage

```javascript
import ProgressArc from 'progress-arc-component'

class Default extends Component {
  state = {
    prog: 50
  }

  render() {
    let { prog } = this.state

    return (
      <div>
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
```

### Properties

- `value` - Current progress
- `max` - Maximum value
- `unit` - Value unit (% by default)

### Customization

ProgressArc generates SVG which can be style with styled-components:

```javascript
import styled from 'styled-components'

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
      <div>
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
```

License
=======
MIT
