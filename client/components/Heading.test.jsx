import React from 'react'

import {screen, render} from '@testing-library/react'

import '@testing-library/jest-dom'

import App from './App.jsx'

describe('<App />', () => {
  test('displays the h1 from home', () => {
    let expected = 'Cereal Killers!'
    render(<App />)

    let heading = screen.getByRole('heading')
    expect(heading).toHaveTextContent(expected)
  })
})