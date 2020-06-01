import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    styles: PropTypes.object
}

const defaultProps = {
    styles: {
        label: {
            fontFamily: 'Comic Sans MS',
            color: 'green'
        },
        input: {
            background: '#ddd',
            border: '1px solid red'
        }
    }
}

const Comparison = () => {
    const {styles} = this.props || {};

    return (
        <div>
            <label style={styles.label}>{this.props.label}</label>
            <input type="text" style={styles.input} onChange={this.handleChange} />
        </div>
    );
}

Comparison.propTypes = propTypes;
Comparison.defaultProps = defaultProps;

export default Comparison;