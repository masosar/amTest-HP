import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import useFetch from './components/useFetch'

test('renders content', () => {
    const endpoint = {
       url: "/hp-characters"
    }

    const component = render(<useFetch url={endpoint} />)
    console.log(component);
})

