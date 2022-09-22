import Star from "./Star";
import React from "react";
import PropTypes from "prop-types";

function Stars(props) {
  const {count} = props;
  if (count >= 1 && count <= 5) {
    const stars = [];
    for (let i = 0; i < count; i += 1) {
      stars.push(<Star></Star>);
    }

    return (
      <ul className="card-body-stars u-clearfix">
        {stars.map((star, index) => {
          return <li key={index}>{star}</li>
        })}
      </ul>
    );
  }
}

Stars.defaultProps = {
  count: 0
}

Stars.propTypes = {
  count: PropTypes.number
}

export default Stars;
