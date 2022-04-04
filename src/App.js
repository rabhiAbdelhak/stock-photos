import { useEffect, useState } from "react";
import ListPhoto from "./components/ListPhoto";
import Search from "./components/Search";
import { useFetchData } from "./Hooks/FetchData";

function App() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, photos] = useFetchData(page, query);
  
  useEffect(() => {
    const scrollEvent = window.addEventListener("scroll", (e) => {
      //check if we are in the end of ehe document
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight
      ) {
        setPage((oldPage) => oldPage + 1);
      }
    });
    return () => window.removeEventListener("scroll", scrollEvent);
  }, [loading]);
  return (
    <div className="App">
      <Search query={query} setQuery={setQuery} setPage={setPage} />
      <ListPhoto loading={loading} photos={photos} />
    </div>
  );
}

export default App;
