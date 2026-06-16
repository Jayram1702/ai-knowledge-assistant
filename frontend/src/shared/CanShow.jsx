import PropTypes from "prop-types";
import React from "react";

const CanShow = React.memo(({ show, children, fallbackComponent }) =>
  show ? children : fallbackComponent || null
);

CanShow.propTypes = {
  show: PropTypes.bool.isRequired,
  fallbackComponent: PropTypes.element,
};

export default CanShow;
