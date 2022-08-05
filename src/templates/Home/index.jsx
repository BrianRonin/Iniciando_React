import './styles.css'
import { useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { loadPosts } from '../../utils/load-posts'
import { Posts } from '../../components/Posts'
import { SearchBar } from '../../components/SearchBar'
import { number } from 'prop-types'

export const Home = (props) => {
  const [posts, setPosts] = useState([])
  const [allPosts, setAllPosts] = useState([])
  const [postsPerPage] = useState(props.pppage)
  //const [filteredPosts, setFilteredPosts] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const isEnPosts = posts.length === allPosts.length

  const handleSearch = (e) => {
    const { value } = e.target
    setSearchValue(value)
  }

  const filteredPosts = searchValue
    ? allPosts.filter((e) => {
        return e.title.toLowerCase().includes(searchValue.toLowerCase())
      })
    : posts

  useEffect(() => {
    handleLoadPosts()
  }, [])

  const handleLoadPosts = async () => {
    const postsAndPhotos = await loadPosts()
    setPosts(postsAndPhotos.slice(0, postsPerPage))
    setAllPosts(postsAndPhotos)
  }

  const loadMorePosts = () => {
    setPosts(allPosts.slice(0, posts.length + postsPerPage))
  }

  return (
    <>
      <section className="container">
        <SearchBar
          type="search"
          value={searchValue}
          onChange={handleSearch}
          placeholder={'pesquise aqui'}
        />
        <div className="searchContainer">
          {!!searchValue && (
            <>
              <h1>Resultados: {filteredPosts.length}</h1>
            </>
          )}
        </div>
        {!searchValue && <Posts posts={posts} />}
        {!!searchValue && <Posts posts={filteredPosts} />}
        {filteredPosts.length === 0 && <h1>Sem posts</h1>}
        <div className="btn-container">
          {!searchValue && (
            <Button
              onClick={loadMorePosts}
              disabled={isEnPosts}
              text={isEnPosts ? 'não tem mais blogs pra ver XC' : 'Ver mais'}
            ></Button>
          )}
        </div>
      </section>
    </>
  )
}

Home.propTypes = {
  pppage: number,
}
