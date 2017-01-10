# Simple progress arc for React ([demo](http://szastupov.github.io/progress-arc-component)) [![NPM version][npm-image]][npm-link] [![Build status][travis-image]][travis-link]

## Installation

    $ yarn add progress-arc-component

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
- `textVisible` - Show text inside the arc (true)
- `radius` - Set the radius of the arc (90)
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
[npm-image]: https://img.shields.io/npm/v/progress-arc-component.svg?style=flat
[npm-link]: https://npmjs.org/package/progress-arc-component
[travis-image]: https://img.shields.io/travis/szastupov/progress-arc-component.svg?style=flat
[travis-link]: https://travis-ci.org/szastupov/progress-arc-component
