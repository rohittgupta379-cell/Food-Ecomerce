import React from 'react'
import Layout from '../layouts/Layout'
import PopularCategories from '../common/PopularCategories'
import PopularDishes from '../common/PopularDishes'

const Menu = () => {
  return (

    <>
    <Layout>
       <PopularCategories />

       <PopularDishes/>
    </Layout>
    </>
  )
}

export default Menu