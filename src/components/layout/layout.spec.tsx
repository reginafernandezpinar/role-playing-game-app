import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { Provider } from 'react-redux'

const mockedBrastlewarkData: Inhabitant[] = [
  {
    id: 0,
    name: 'name',
    thumbnail: 'picture',
    age: 20,
    hair_color: 'color',
    weight: 'weight',
    height: 100,
    professions: ['profession'],
    friends: ['friends'],
  }
]

jest.mock('../../tools/api', () => ({
  fetchInhabitantData: () =>
    new Promise<{ data }>((resolve) =>
      setTimeout(() => resolve({ data: { mockedBrastlewarkData } }), 500)
    ),
}))

import { makeStore } from '../../app/store'
import Layout from '.'
import { LayoutProps } from './layout.types'
import { Inhabitant } from '../../types/inhabitant'

const props: LayoutProps = {
  children: "",
  loadInhabitants: true,
};

describe('<Counter />', () => {
  it('renders the component', () => {
    const store = makeStore()

    render(
      <Provider store={store}>
        <Layout {...props}/>
      </Provider>
    )

    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  // it('browse inhabitants', () => {
  //   const store = makeStore()

  //   render(
  //     <Provider store={store}>
  //       <Layout {...props}/>
  //     </Provider>
  //   )

  //   user.click(screen.getByRole('button', { name: /decrement value/i }))

  //   expect(screen.getByText('-1')).toBeInTheDocument()
  // })
})
