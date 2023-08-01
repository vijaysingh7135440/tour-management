import React from 'react'
import TourCard from '../../shared/TourCard'
 
import {Col} from 'reactstrap'
<<<<<<< HEAD
import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../utils/config';
=======
>>>>>>> eed22c70ab55f7283109791f6dbb427c4ba9801d

import useFetch from "./../../hooks/useFetch";
import {BASE_URL} from "./../../utils/config"

const FeaturedTourList = ()=> {
  const {data: featuredTours,loading,error}=useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);
  return (
    <>
   {loading && <h4>Loading............</h4>}
   {error && <h4>{error}</h4>}
   {
    !loading && !error && featuredTours?.map(tour => (
      <Col lg="3" md='6' sm="6" className='mb-4' key={tour._id}>
      <TourCard tour={tour}/>
    </Col>
    ))
   }
    </>
  )
}

export default FeaturedTourList