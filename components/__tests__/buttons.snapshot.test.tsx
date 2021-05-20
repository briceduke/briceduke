import * as React from 'react'
import { Primary, Secondary } from '../buttons'
import renderer from 'react-test-renderer'

describe('primary button', () => {
    it('renders correctly', () => {
        const primary = renderer.create(<Primary>Hello</Primary>).toJSON()
        expect(primary).toMatchSnapshot()
    })
})

describe('secondary button', () => {
    it('renders correctly', () => {
        const secondary = renderer.create(<Secondary>Hello</Secondary>).toJSON()
        expect(secondary).toMatchSnapshot()
    })
})