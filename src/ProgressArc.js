import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  display: block;
  margin: 1em auto;
  width: 100%;
  height: 6em;

  circle {
    fill: none;
    stroke-width: 20;
    transform: translate(100px, 100px) rotate(-89.9deg);
    transition: stroke-dashoffset 0.3s linear;
  }

  .arc-background {
    stroke: ${props => props.arcBackgroundColor};
  }

  .arc {
    stroke: ${props => props.arcColor};
    stroke-linecap: ${props => props.rounded ? 'round' : 'inherit'}
  }

  text {
    fill: ${props => props.textColor};
    font-size: 50px;
    font-weight: 600;
    text-anchor: middle;
  }
`

const radius = 90
const p = 2 * radius * Math.PI

function ProgressArc({
  value, max, className, unit,
  arcColor, arcBackgroundColor, textColor, rounded
}) {
  return (
    <Svg
      className={className}
      arcColor={arcColor}
      arcBackgroundColor={arcBackgroundColor}
      textColor={textColor}
      rounded={rounded}
      viewBox="0 0 200 200">

      <circle
        className="arc-background"
        r={radius}/>

      <circle
        className="arc"
        r={radius}
        strokeDashoffset={((max - value) / max) * p}
        strokeDasharray={p}
      />

      <text x="100" y="115">
        {value}{unit}
      </text>
    </Svg>
  )
}

ProgressArc.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  unit: PropTypes.string,
  arcColor: PropTypes.string,
  arcBackgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  rounded: PropTypes.bool
}

ProgressArc.defaultProps = {
  value: 0,
  max: 100,
  unit: '%',
  arcColor: '#818a91',
  arcBackgroundColor: '#eceeef',
  textColor: '#818a91',
  rounded: false
}

export default ProgressArc
