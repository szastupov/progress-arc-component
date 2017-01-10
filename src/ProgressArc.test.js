import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import ProgressArc from './ProgressArc'

it('renders with default props', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ProgressArc/>, div)
})

it('renders value', () => {
  const tree = renderer.create(<ProgressArc value={42}/>)
  expect(tree).toMatchSnapshot()
})

it('renders custom units', () => {
  const tree = renderer.create(<ProgressArc value={42} unit='GB' max={64}/>)
  expect(tree).toMatchSnapshot()
})

it('renders with custom colors', () => {
  const tree = renderer.create(
    <ProgressArc
      value={99}
      arcColor="red"
      textColor="black"
      rounded={true}
    />
  )
  expect(tree).toMatchSnapshot()
})

it('disables text', () => {
  const tree = renderer.create(<ProgressArc value={42} textVisible={false}/>)
  expect(tree).toMatchSnapshot()
})
