import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    styles: PropTypes.object,
    side1: PropTypes.node.isRequired,
    side2: PropTypes.node.isRequired,
};

const defaultProps = {
    styles: {
        wrapper: {
            position: "relative",
        },
        side1: {},
        side2: {
            position: "absolute",
            left: 0,
            top: 0,
        },
    },
};

const Comparison = ({ side1, side2, styles = {} }) => {
    return (
        <div style={styles.wrapper}>
            <div style={styles.side1}>{side1}</div>
            <div style={styles.side2}>{side2}</div>
        </div>
    );
};

Comparison.propTypes = propTypes;
Comparison.defaultProps = defaultProps;

export default Comparison;
