import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '.'

describe('<Button />', () => {
  it('should render the button with the text "load more"', () => {
    // render do jest renderiza uma dom pra testes
    render(<Button text='load more' />)
    //screen.query = não levanta um erro se encontrar o elemento
    //screen.get = se não encontrar o elemento levanta erro
    //screen.find =
    const button = screen.getByRole('button', {
      name: /load more/i,
    })
    // espero que o botão esteja no documento/pagina
    expect(button).toBeInTheDocument()
  })
  it('should call function on button click', () => {
    const fn = jest.fn() // cria uma mock function / faz parte do objeto Jest: https://jestjs.io/pt-BR/docs/jest-object
    // renderizando no dom ficticio o button
    render(<Button text='load more' onClick={fn} />)

    const button = screen.getByRole('button', {
      name: /load more/i,
    })

    userEvent
    fireEvent.click(button) // simula um clique no botão

    // espero que o botão esteja no documento/pagina
    expect.assertions(1) // eu espero que seja chamado o expect uma vez
    //expect(fn).toHaveBeenCalled() // tem que ser chamada
    expect(fn).toHaveBeenCalledTimes(1) // tem que ser chamada 1 vez
  })

  it('should be enabled when disabled is false', () => {
    render(<Button text='load more' disabled={false} />)
    const button = screen.getByRole('button', {
      name: /load more/i,
    })
    expect(button).toBeEnabled()
  })
  it('should be disabled when disabled is true', () => {
    render(<Button text='load more' disabled={true} />)
    const button = screen.getByRole('button', {
      name: /load more/i,
    })
    expect(button).toBeDisabled()
  })

  it('should match snapshot', () => {
    const fn = jest.fn()
    const { container } = render(
      <Button text='Load more' disabled={true} onClick={fn} />
    )
    expect(container).toMatchSnapshot()
  })
})
