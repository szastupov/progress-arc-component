import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  display: block;
  margin: 1em auto;
  width: 100%;
  height: 6em;

  circle {
    stroke: #818a91;
    fill: none;
    stroke-width: 20;
    transform: translate(100px, 100px) rotate(-89.9deg);
    transition: stroke-dashoffset 0.3s linear;
  }

  text {
    fill: #818a91;
    font-size: 50px;
    font-weight: 600;
    text-anchor: middle;
  }
`

const radius = 90
const p = 2 * radius * Math.PI

function ProgressArc({ value, max, className, unit }) {
  return (
    <Svg
      className={className}
      viewBox="0 0 200 200">
      <circle
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
  unit: PropTypes.string
}

ProgressArc.defaultProps = {
  value: 0,
  max: 100,
  unit: '%'
}

export default ProgressArc
