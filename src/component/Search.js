const Search = ({value,setSearch}) => {
    return (<input value={value} onChange={(e)=>setSearch(e.target.value)}/>)
}

export default Search
