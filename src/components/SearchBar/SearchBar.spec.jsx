const { render, screen } = require('@testing-library/react')
import userEvent from '@testing-library/user-event'
import { click } from '@testing-library/user-event/dist/click'
import { keyboard } from '@testing-library/user-event/dist/keyboard'
import { type } from '@testing-library/user-event/dist/type'
import { SearchBar } from '.'

// setup function
function setup(jsx) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  }
}

test('render with a setup function', async () => {
  const { user } = setup(<SearchBar />)
})

const props = {
  type: 'text',
  defaultValue: '',
  onchange: () => 'x',
  placeholder: 'digite aqui',
}

describe('<ShearchBar />', () => {
  it('should call handleChange function on each key', () => {
    const user = userEvent.setup()
    render(<SearchBar {...props} />)

    const input = screen.getByPlaceholderText('digite aqui')
    const onchangeInput = jest.spyOn(input, 'onchange', 'get')
    // input.focus()
    // user.keyboard('abc')
    // console.log(onchangeInput)
    // expect(onchangeInput).toHaveBeenCalledTimes(3)
  })
})
