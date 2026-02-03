import React from 'react'
import { useFilterContext } from '../context/filterContext'
import { useProductContext } from '../context/productcontext'
import GridView from './GridView'
import ListView from './ListView'



const ProductList = () => {
  const {filter_products,grid_view} = useFilterContext();
  const { isLoading} = useProductContext();

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '5rem' }}>
        <div className="loader">
          <h3>Connecting to Database...</h3>
          <p>Please wait a moment while the server wakes up.</p>
        </div>
      </div>
    );
  }
  
    if(grid_view === true){
return <GridView products={filter_products}/>
    }

    if(grid_view === false){
      return <ListView products={filter_products}/>
          } 
      
  
}

export default ProductList