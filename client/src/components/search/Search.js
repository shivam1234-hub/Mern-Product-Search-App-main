import React,{useState} from "react"
import classes from "./Search.module.css";
import SearchIcon from "@mui/icons-material/Search";

import axios from "axios";


const Search = ()=>{

    const [search, setSearch] = useState("");
    const [data,setData] = useState();

    const onInput = e => setSearch(e.target.value);


    const apiCall  = ()=>{


        console.log("hello");
        const  body = {
            query:search
        }


        axios.post("http://localhost:5000/search",body).then((res)=>{

          setData(res);

          console.log(res);
        })
    }







    return (


    <div className={classes.body}>
      <div className={classes.wrapper}>
        <div className={classes.search}>
          <input
            id="search"
            type="search"
            placeholder="What are you looking for?"
            autocomplete="off"
            value = {search}
            onChange={onInput}
          />
          <SearchIcon style={{ color: "#7694FF" }} onClick = {apiCall} />
        </div>
      </div>
    </div> 
    )
}

export default Search ;