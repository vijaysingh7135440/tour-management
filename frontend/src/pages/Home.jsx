import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap'
import img2 from '../assets/image/img 2.jpg'
import img1 from '../assets/image/img1.jpg'
import video1 from '../assets/image/travel.mp4'
// import subtitle from '../shared/subtitle'
import world from '../assets/image/world.jpg'

// import SearchBar from '../shared/SearchBar'

const Home = () => {
  return (

    // -----------new section-------------
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero_content">
              <div className="hero_subtitle d-flex align-items-center">
              {/* <subtitle subtitle={'Know where you go'} /> */}
                <img src={world} alt="" />
              </div>
              <h1> Travelling is the best way to spend  <span className='highlight'>Vaction</span></h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt culpa, quibusdam quo atque assumenda saepe quaerat voluptas quis ducimus soluta deleniti 
                sed ipsa quas voluptatem. Necessitatibus, tempora quasi! Amet, nobis?
              </p>
            </div>

          </Col>
          <Col lg='2'>
            <div className="hero_img_box">
              <img src={img1} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero_img_box mt-4">
              <img src={video1} type="video/mp4" alt="" controls autostart autoPlay  />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero_img_box mt-5">
              <img src={img2} alt="" />
            </div>
          </Col>
          {/* <SearchBar /> */}
        
        </Row>
      </Container>
    </section>
  )
}

export default Home
