import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { Home } from '.'

const handlers = [
  // eu posso usar * pra dizer qualquer requisição desta url pra frente tipo /posts & /photos
  rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: 'titulo 1',
          body: 'o rato',
        },
        {
          userId: 2,
          id: 2,
          title: 'titulo 2',
          body: 'o rato',
        },
        {
          userId: 3,
          id: 3,
          title: 'titulo 3',
          body: 'o rato',
        },
        {
          userId: 4,
          id: 4,
          title: 'titulo 4',
          body: 'o rato',
        },
      ]),
    )
  }),
  rest.get('https://jsonplaceholder.typicode.com/photos', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          albumId: 1,
          id: 1,
          title: 'ttt',
          url: 'https://via.placeholder.com/600/92c952',
          thumbnailUrl: 'https://via.placeholder.com/150/92c952',
        },
        {
          albumId: 2,
          id: 2,
          title: 'ttt',
          url: 'https://via.placeholder.com/600/92c952',
          thumbnailUrl: 'https://via.placeholder.com/150/92c952',
        },
        {
          albumId: 3,
          id: 3,
          title: 'ttt',
          url: 'https://via.placeholder.com/600/92c952',
          thumbnailUrl: 'https://via.placeholder.com/150/92c952',
        },
        {
          albumId: 4,
          id: 4,
          title: 'ttt',
          url: 'https://via.placeholder.com/600/92c952',
          thumbnailUrl: 'https://via.placeholder.com/150/92c952',
        },
      ]),
    )
  }),
]

const server = setupServer(...handlers)

describe('<Home />', () => {
  beforeAll(() => {
    server.listen()
  })
  afterEach(() => {
    server.resetHandlers()
  })
  afterAll(() => {
    server.close()
  })

  function posts() {
    const [images, head, body] = [
      screen.getAllByRole('img', { name: /ttt/i }),
      screen.getAllByRole('heading', /titulo/i),
      screen.getAllByText(/o rato/i),
    ]
    return [images, head, body]
  }

  it('should render search, posts and load more', async () => {
    render(<Home pppage={2} />)
    //seach loaded
    expect(screen.getByPlaceholderText('pesquise aqui')).toBeInTheDocument()
    await screen.findAllByRole('img', { name: /ttt/i })
    //posts loaded
    posts().forEach((p) => expect(p).toHaveLength(2))
    const btn = screen.getByRole('button', { name: 'Ver mais' })
    await waitFor(() => userEvent.click(btn))
    //show more is working
    expect(btn.textContent).toBe('não tem mais blogs pra ver XC')
    posts().forEach((p) => expect(p).toHaveLength(4))
    expect.assertions(8)
  })
  it('should search working', async () => {
    render(<Home pppage={2} />)

    await screen.findAllByRole('heading', { name: /titulo/i })
    const input = screen.getByPlaceholderText('pesquise aqui')
    userEvent.type(input, 'titulo 4')
    screen.debug()
    let [, head] = posts()
    const [result, found] = head
    //searcxh working
    expect(found).toContainHTML('titulo 4')
    expect(result).toContainHTML('Resultados: 1')
    userEvent.clear(input)
    //clear input working
    posts().forEach((p) => expect(p).toHaveLength(2))
    expect.assertions(5)
  })
})
