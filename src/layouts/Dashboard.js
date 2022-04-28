import React from 'react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import { Grid, GridColumn, GridRow, Image } from 'semantic-ui-react'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'
import { ToastContainer } from 'react-toastify'
import ProductAdd from '../pages/ProductAdd'



// Aşağıda <Grid> içerisine <Grid columns={3}> dersen mesela satır içerisini 3 eşit sütun parçasına böler
export default function Dashboard() {
  return (
    <div>
      <ToastContainer position='bottom-right'/>
        <Grid> 
          <GridRow>
            <GridColumn width={4}>
            <Categories></Categories>
            </GridColumn>
            <GridColumn width={12}>
            <Routes>
              <Route path="/" element={<ProductList/>} exact/>
              <Route path='/products' element={<ProductList/>} exact/>
              <Route path="/products/:id" element={<ProductDetail/>}/>
              <Route path="/cart" element={<CartDetail/>}/>
              <Route path="/product/add" element={<ProductAdd/>}/>
            </Routes>
            </GridColumn>
          </GridRow>
        </Grid>

        
        
    </div>
  )
}
