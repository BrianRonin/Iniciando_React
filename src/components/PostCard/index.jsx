import { string } from 'prop-types'
import './styles.css'

export const PostCard = ({ cover, title, body, alt }) => (
  <div key={'postCard'} className="post">
    <img src={cover} alt={alt} />
    <div className="post-content">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  </div>
)

PostCard.propTypes = {
  cover: string,
  title: string,
  body: string,
  alt: string,
}
