import { render, screen, waitFor } from '@testing-library/react'
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
          body: 'o rato 1',
        },
        {
          userId: 2,
          id: 2,
          title: 'titulo 2',
          body: 'o rato 2',
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
          title: 'feasfeas',
          url: 'https://via.placeholder.com/600/92c952',
          thumbnailUrl: 'https://via.placeholder.com/150/92c952',
        },
        {
          albumId: 2,
          id: 2,
          title: 'gsgsegsegsegsegsegsegsgsgsg',
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

  it('should render search, posts and load more', async () => {
    render(<Home />)
    await waitFor(() => screen.getByRole('heading', 'titulo 1'))
    console.log(screen.debug())
  })
})
