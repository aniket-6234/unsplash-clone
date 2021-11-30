import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Images from './Images'
import ShowQuery from './ShowQuery'
// import Unsplash, { toJson } from "unsplash-js";

const Home = () => {

  const [images, setImages] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");


  useEffect(() => {
      const getData = async () => {
        const res = await axios.get(`https://api.unsplash.com/photos/?per_page=20&client_id=6IHP54nFjYchqoxO4y-cmehRIT-2d_ROTkH8kb7OaZo`);
        //console.log(res.data);
        setImages(res.data)
      }
      getData();
  }, [])


  const showImages = async(e) => {
    e.preventDefault();
      const result = await axios.get(`https://api.unsplash.com/search/photos/?per_page=20&client_id=6IHP54nFjYchqoxO4y-cmehRIT-2d_ROTkH8kb7OaZo&query=${query}`);
      setPhotos(result.data);
      console.log(result.data);
      setQuery("");
  }


  return (
    <div className="home">
       <div className="divide">
         <div className="box-1">
           <h1 className="head">Get Manage Your Images More Easier Than Ever.</h1>
           <button className="btn-explore"><a id="link" href="#search-box">Let explore - it's free</a></button>
         </div>
         <div className="box-2">
            <img className="unplash" src="./images/unplash-logo.svg" alt="logo" />
         </div>
       </div>

       <div className="search-box" id="search-box">
          <div className="search-container">
               <img id="search-icon" src="./images/search.svg" alt="search"/>
               <input 
                  type="text" 
                  autoFocus={true} 
                  className="search-input" 
                  placeholder="Search image here..." 
                  name="query"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
               <button onClick={showImages} type="submit" className="btn-search">Search</button>
          </div>
          <div className="explore-cat">
            <p><a id="link-explore" href="https://unsplash.com/" target="_blank" >Explore All Categories</a></p>
            <img className="arrow" src="./images/arrow-right.svg" alt="arrow" />
          </div>
       </div>

       <div className="img-container">
         {
           photos.length === 0 ? <Images images={images} /> : <ShowQuery photos={photos} />
         }
       </div>
    </div>
  )
}

export default Home
