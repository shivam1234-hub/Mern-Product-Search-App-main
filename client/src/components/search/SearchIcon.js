import React ,{useState,useRef} from "react";
import searchSrc from "./search.svg";
import classes from "./SearchIcon.module.css";
import Search from "./Search";


const SearchIcon = ()=>{
    const [isSearchOpen,setIsSearchOpen] = useState(false);
    const searchInputRef = useRef();
    const searchParentRef = useRef();

    const toggleSearchHandler = () => {
        setIsSearchOpen(state => !state);
        const search = searchInputRef.current;
        const parent = searchParentRef.current;
        if (isSearchOpen) {
          parent.setAttribute("width", "0");
          parent.setAttribute("height", "0");
          search.setAttribute(
            "style",
            "transform: translateY(-4rem);opacity: 0;transition: all 0.5s;"
          );
        } else {
          parent.setAttribute("width", "100vw");
          parent.setAttribute("height", "100vh");
          search.setAttribute(
            "style",
            "transform: translateY(0px);opacity: 1;transition: all 0.5s;"
          );
        }
      };

      return (
        <div className={classes.parent_search} ref={searchParentRef}>
          <div className={classes.icon_container}>
            <img src={searchSrc} onClick={toggleSearchHandler} />
          </div>
          <div ref={searchInputRef} className={classes.search_input}>
            {isSearchOpen && <Search />}
          </div>
        </div>
      );


}

export default SearchIcon;



