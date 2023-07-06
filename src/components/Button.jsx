import PropTypes from 'prop-types';

const Button = ({ color, text, onClick, icon }) => {
    return(
        <button 
        style={{ backgroundColor: color }}
        className="btn" 
        onClick = { onClick } 
        >{ text } { icon }
        </button>
    );
}

Button.defaultProps = {
    color: 'steelblue'
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}
export default Button;