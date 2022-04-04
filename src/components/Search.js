import { useRef} from 'react';
import {FaSearch} from 'react-icons/fa';

const Search = ({query,setQuery, setPage}) => {
const searchRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    setQuery(searchRef.current.value);
  }
  return (
    <section className='search'>
        <form className='form' onSubmit={handleSubmit}>
            <input type='text' placeholder='Tab To Search ...' defaultValue={query} ref = {searchRef} />
            <button><FaSearch/></button>
        </form>
    </section>
  )
}

export default Search