import React from 'react'
import { useParams } from 'react-router-dom';  
import ItemList from './ItemList';
import {items} from "./ItemData"
export const  Detailedpage= () => {
  const { id } = useParams();
  const productId = Number(id); 

  const detailed = items.filter((p) => p.id === productId);
  const related=items.filter((p)=>p.category=== detailed[0].category && p.id !== productId)
  return (
    <>
    <div className='detailedcontainer'>Image ID is {id}
<div className="center">
    <ItemList products ={detailed}
     
    
    />   {<p><strong>Rating:</strong> ⭐⭐⭐⭐☆ (4/5)</p>
    }  <p><strong>Availability:</strong> In Stock</p></div>
    <ItemList products={related}/>
    </div>
    </>

  )
}
export default Detailedpage
