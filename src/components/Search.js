import {FaSearch} from 'react-icons/fa';

const Search = ({query,setQuery, setPage, page , fetchImages}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!query) return;
    if(page === 1) {
      fetchImages();
      console.log('here we are')
      return;
    }
    setPage(1);
  }
  return (
    <section className='search'>
        <form className='form' onSubmit={handleSubmit}>
            <input type='text' placeholder='Tab To Search ...' value={query} onChange = {(e) => setQuery(e.target.value)} />
            <button><FaSearch/></button>
        </form>
    </section>
  )
}

export default Search