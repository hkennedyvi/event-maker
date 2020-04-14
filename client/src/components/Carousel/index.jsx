import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
  "mdbreact";
import "./carousel.css"


const CarouselPage = () => {
  return (
        <div className="MDBContainer" >
          <MDBCarousel id='Carousel'
            activeItem={1}
            length={3}
            showControls={false}
            showIndicators={false}
            className="Carousel"
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img
                    className="Carousel"
                    src="https://i.imgur.com/RV6evxq.png"
                    alt="First slide"
                  />
                  <MDBMask overlay="black-light" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="slide-1">You're in Cahoots!</h3>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="https://i.imgur.com/bN61ENB.png"
                    alt="Second slide"
                  />
                  <MDBMask overlay="black-strong" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="slide-2">Make your next get together alittle more neighborly!</h3>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="https://i.imgur.com/dzYcrMV.png"
                    alt="Third slide"
                  />
                  <MDBMask overlay="black-slight" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="slide-3">Spontaneously commit to something new!<br></br>
              Click join!</h3>
                </MDBCarouselCaption>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </div>
  );
}


export default CarouselPage;

