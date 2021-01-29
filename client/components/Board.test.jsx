import React from 'react'

import {screen, render} from '@testing-library/react'

import '@testing-library/jest-dom'

import Board from './Board.jsx'

describe('<App />', () => {
  test('displays the h1 from home', () => {
    render(<Board />)
    let tileBoard = screen.getById('testId')
    expect(tileBoard).toBe(1)
  })
})