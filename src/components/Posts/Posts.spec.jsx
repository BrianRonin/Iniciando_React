const { render, screen } = require('@testing-library/react')
import { Posts } from '.'

const props = {
  posts: [
    {
      key: 1,
      conver: 'foto',
      title: 'Um titulo foda',
      body: 'Um body fodaaa',
      alt: 'Um alt fodaaaa',
    },
    {
      key: 2,
      conver: 'foto',
      title: 'Um titulo foda',
      body: 'Um body fodinha',
      alt: 'Um alt',
    },
    {
      key: 3,
      conver: 'foto',
      title: 'Um titulo foda',
      body: 'Um body fodão',
      alt: 'Um alt',
    },
  ],
}

describe('<Posts/>', () => {
  it('should render posts', () => {
    render(<Posts {...props} />)
    expect(
      screen.getAllByRole('heading', { name: /Um titulo foda/i }),
    ).toHaveLength(3) // eu espero que tenha selecionado 3
    // eu espero que tenha selecionado 3
    expect(screen.getAllByRole('img', { name: /Um alt/i })).toHaveLength(3)
    expect(screen.getAllByText(/Um body/i)).toHaveLength(3)
    expect(screen.getAllByText(/Um body/i)).toHaveLength(3)
  })
  it('should match snapshot', () => {
    const { container } = render(<Posts {...props} />)
    expect(container).toMatchSnapshot()
  })
})
