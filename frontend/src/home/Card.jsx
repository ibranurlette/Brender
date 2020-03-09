import React from "react";
import PropTypes from "prop-types";
import { animated, interpolate } from "react-spring/hooks";
import Carousel from "nuka-carousel";
import Table from 'react-bootstrap/Table'
class Card extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, bind, data } = this.props;
    const { name, distance, text, pics } = data[i];

    return (
      <animated.div
        key={i}
        style={{
          transform: interpolate(
            [x, y],
            (x, y) => `translate3d(${x}px,0,0)`
          )
        }}
      >
        <animated.div
          {...bind(i)}
          style={{
            transform: interpolate([rot, scale], trans)
          }}
        >
          <div className="card">
            <Carousel>

              {pics.map((pic, index) => (
                <img className="img_corousel" src={require(`../img/${pic}`)} key={index} alt="profilePicture">
                </img>
              ))}
               <div id="profile_swipe">
              <p><b>Name :</b> {name}</p>
                <p><b>Distance :</b> {distance}</p>
                <p><b>Description :</b>{text}</p>
                </div>
            </Carousel>
                
          </div>
        </animated.div>
      </animated.div>
    );
  }
}

// Card.propTypes = {
//   name: PropTypes.string,
//   distance: PropTypes.string,
//   text: PropTypes.string,
//   pics: PropTypes.array
// };

export default Card;