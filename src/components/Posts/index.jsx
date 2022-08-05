import './styles.css'
import { PostCard } from '../PostCard'
import { array } from 'prop-types'
export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts &&
      posts.map((post, indice) => (
        <PostCard //recebe atributos como um obj no props
          key={indice}
          cover={post.cover}
          title={post.title}
          body={post.body}
          alt={post.alt}
        />
      ))}
  </div>
)

Posts.propTypes = {
  posts: array,
}
