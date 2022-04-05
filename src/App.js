import axios from "axios";
import {useEffect, useRef, useState } from "react";
import ListPhoto from "./components/ListPhoto";
import Search from "./components/Search";

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = "https://api.unsplash.com/photos";
const searchUrl = "https://api.unsplash.com/search/photos";

function App() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [newImages , setNewImages] = useState(false);
  const mounted = useRef(false); 
  const [photos, setPhotos] = useState([]);

  const fetchImages = async () => {
    let pageUrl = `&page=${page}`;
    let queryUrl = `&query=${query}`;
    let url = query
      ? `${searchUrl}${clientID}${pageUrl}${queryUrl}`
      : `${mainUrl}${clientID}${pageUrl}`;

    try {
      const { data } = await axios(url);
      const newData = query ? data.results : data;
      setPhotos((oldData) => {
        return query && page === 1 ? newData : [...oldData, ...newData];
      });
      setNewImages(false);
      setLoading(false);
    } catch (err) {
      setNewImages(false);
      console.log(err.response);
    }
  };

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line 
  }, [page]);
  
  useEffect(() => {
    if(!mounted.current){
      console.log('first');
      mounted.current = true;
      return;
    }
    if(!newImages) return;
    if(loading) return;
    setPage(oldPage => oldPage + 1);
    console.log('second');
    // eslint-disable-next-line 
  }, [newImages]);

  const event = (e) => {
    if(window.innerHeight + window.scrollY >= document.body.scrollHeight-5){
          setNewImages(true);
    } 
  }
  useEffect(() => {
    window.addEventListener("scroll", event);

    return () => window.removeEventListener("scroll", event);

    // eslint-disable-next-line 
  }, []);
  return (
    <div className="App">
      <Search
        query={query}
        setQuery={setQuery}
        setPage={setPage}
        page={page}
        fetchImages={fetchImages}
      />
      <ListPhoto loading={loading} photos={photos} />
    </div>
  );
}

export default App;
