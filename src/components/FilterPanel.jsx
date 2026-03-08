import "../styles/filter.css"

function FilterPanel({setPrice,setRating}){

return(

<div className="filter">

<select onChange={(e)=>setPrice(e.target.value)}>
<option value="">Price</option>
<option value="3000">Below 3000</option>
<option value="5000">Below 5000</option>
</select>

<select onChange={(e)=>setRating(e.target.value)}>
<option value="">Rating</option>
<option value="4">4+</option>
<option value="4.5">4.5+</option>
</select>

</div>

)

}

export default FilterPanel