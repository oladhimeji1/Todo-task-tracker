import Button from "./Button";

const Header = ({ title, onAdd, showAddX }) => {
    return(
        <header className="header">
            <h1>{ title }</h1>
            <Button color={ !showAddX ? 'green' : 'red'} 
            text = { showAddX ? 'Close' : 'Add'} 
            icon = { showAddX ? <i className="fa fa-times"></i> : <i className="fa fa-plus"></i>}
            onClick={onAdd} />
        </header>
    );
}

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header;