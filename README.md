# Simple progress arc for React

## [Demo](http://szastupov.github.io/progress-arc-component)

## Installation

With yarn:

    $ yarn add progress-arc-component

With npm:

    $ npm install --save progress-arc-component

## Usage

```javascript
import ProgressArc from 'progress-arc-component'

<ProgressArc value={63}/>
```

![ProgressArc screenshot](http://i.imgur.com/vgxgdi9.png)

### Properties

- `value` - Current progress
- `max` - Maximum value (100)
- `unit` - Value unit (%)
- `arcColor` - Progress arc color (#818a91)
- `arcBackgroundColor` - Arc background color (#eceeef)
- `textColor` - Text color (#818a91)
- `rounded` - Draw rounded corners (false)

### Customization

ProgressArc generates SVG that can be tweaked with [styled-components][1]:

```javascript
import styled from 'styled-components'

const StyledProgressArc = styled(ProgressArc)`
  height: 12em;
  width: 12em;
  border: 0.3em solid black;
  border-radius: 0.5em;
  padding: 1em;
`
```

[1]: https://github.com/styled-components/styled-components
