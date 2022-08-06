// #### EM CLASSE ####

// export class Home extends Component {
//   state = {
//     counter: 0,
//     posts: [],
//     allPosts: [],
//     page: 0,
//     postsPerPage: 10,
//     searchValue: '',
//     filteredPosts: [],
//   }

//   loadPosts = async () => {
//     const { postsPerPage } = this.state
//     const postsAndPhotos = await loadPosts()
//     const posts = postsAndPhotos.slice(0, postsPerPage)
//     this.setState({
//       posts: posts,
//       allPosts: postsAndPhotos,
//     })
//   }

//   async componentDidMount() {
//     await this.loadPosts()
//     console.log('conectado ao mongo db')
//   }

//   loadMorePosts = () => {
//     const { postsPerPage, posts, allPosts } = this.state
//     const newPosts = allPosts.slice(0, posts.length + postsPerPage)
//     this.setState({
//       posts: newPosts,
//     })
//   }

//   handleSearch = (e) => {
//     const { allPosts } = this.state
//     const { value } = e.target
//     this.setState({
//       searchValue: value,
//     })
//     const wanted = allPosts.filter((e) => {
//       return e.title.toLowerCase().includes(value.toLowerCase())
//     })

//     this.setState({
//       filteredPosts: wanted,
//     })
//   }

//   render() {
//     const { posts, searchValue, allPosts, filteredPosts } =
//       this.state
//     const isEnPosts = posts.length === allPosts.length
//     return (
//       <>
//         <section className='container'>
//           <SearchBar
//             type='search'
//             value={searchValue}
//             onChange={this.handleSearch}
//             placeholder={'pesquise aqui'}
//           />
//           <div className='searchContainer'>
//             {!!searchValue && (
//               <>
//                 <h1>Resultados: {filteredPosts.length}</h1>
//               </>
//             )}
//           </div>
//           {!searchValue && <Posts posts={posts} />}
//           {searchValue.length > 0 && (
//             <Posts posts={filteredPosts} />
//           )}
//           {filteredPosts.length === 0 && <h1>Sem posts</h1>}
//           <div className='btn-container'>
//             {!searchValue && (
//               <Button
//                 onClick={this.loadMorePosts}
//                 text={
//                   isEnPosts
//                     ? 'não tem mais blogs pra ver XC'
//                     : 'Ver mais'
//                 }
//                 disabled={isEnPosts}
//               ></Button>
//             )}
//           </div>
//         </section>
//       </>
//     )
//   }
// }
