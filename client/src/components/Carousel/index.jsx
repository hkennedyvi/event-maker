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
                  <h3 className="slide-2">Get together with your neighbors!</h3>
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
                  <h3 className="slide-3">Find a friend instantly with Cahoots! <br></br>
              Making it easier to live in the momment!</h3>
                </MDBCarouselCaption>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </div>
      /* </div>
    </div> */
  );
}


export default CarouselPage;

