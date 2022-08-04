import './styles.css'
import { PostCard } from '../PostCard'
export const Posts = ({ posts = [] }) => (
  <>
    <div className='posts'>
      {posts.map((post) => (
        <PostCard //recebe atributos como um obj no props
          key={post.id}
          cover={post.cover}
          title={post.title}
          body={post.body}
          alt={post.alt}
        />
      ))}
    </div>
  </>
)
