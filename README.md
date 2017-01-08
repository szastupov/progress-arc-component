## Simple progress arc component for React

### [Demo](http://szastupov.github.io/progress-arc-component)

### Installation

    yarn add progress-arc-component

### Usage

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

#### Properties

- `value` - Current progress
- `max` - Maximum value
- `unit` - Value unit (% by default)

#### Customization

ProgressArc generates SVG that can be styled with [styled-components][1]:

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
```

[1]: https://github.com/styled-components/styled-components
