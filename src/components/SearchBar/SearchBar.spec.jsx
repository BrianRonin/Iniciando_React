const { render, screen } = require('@testing-library/react')
import userEvent from '@testing-library/user-event'
import { SearchBar } from '.'

describe('<ShearchBar />', () => {
  it('should call handleChange function on each key and value', () => {
    const fn = jest.fn()
    render(
      <SearchBar
        onChange={fn}
        placeholder="pesquise aqui"
        value="valor"
      />,
    )
    const input = screen.getByPlaceholderText('pesquise aqui')
    userEvent.type(input, 'abc')
    expect(input.value).toBe('valorabc')
    expect(fn).toBeCalledTimes(3)
  })

  it('should match snapshot', () => {
    const fn = jest.fn()
    const { container } = render(
      <SearchBar onChange={fn} placeholder={'pesquise aqui'} />,
    )
    expect(container).toMatchSnapshot()
  })
})
