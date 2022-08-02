import './styles.css'

export const PostCard = ({ cover, title, body, alt }) => (
  <div className='post'>
    <img src={cover} alt={alt} />
    <div className='post-content'>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  </div>
)
