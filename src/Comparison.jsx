import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    styles: PropTypes.object
}

const defaultProps = {
    styles: {
        wrapper: {
            position: "relative"
        },
        side1: {},
        side2: {
            position: "absolute",
            left:0,
            top:0
        }
    }
}

const Comparison = () => {
    const {styles} = this.props || {};

    return (
        <div style={styles.wrapper}>
            <div style={styles.side1}>comparison 1</div>
            <div style={styles.side2}>comparison 2</div>
        </div>
    );
}

Comparison.propTypes = propTypes;
Comparison.defaultProps = defaultProps;

export default Comparison;