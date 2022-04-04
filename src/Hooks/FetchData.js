import { useCallback, useEffect, useState } from 'react';
import {autoFetch} from '../axios/custom';

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;

export const useFetchData = (page, query) => {

 const [loading, setLoading] = useState(true);
 const [data, setData] = useState([]);

 const fetchData =useCallback(async () => {
     
     try{
        let mainUrl = `photos/${clientID}&page=${page}`;
        let url = query ? `search/${mainUrl}&query=${query}` : mainUrl;
        const {data} = await autoFetch(url);
        const newData = query ? data.results : data;
        setData((oldData => {
          return query && page === 1 ? newData : [...oldData, ...newData];
        }));
        setLoading(false)
     }catch(err){
         console.log(err);
     }
     
 }, [query, page]);
 useEffect(() => {
   fetchData();
 }, [page, query, fetchData]);

  return [loading, data]
}

