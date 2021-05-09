import * as React from 'react'
import Date from '../date'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
    const date = renderer.create(<Date dateString={'2021-05-09'} />).toJSON()
    expect(date).toMatchSnapshot()
})