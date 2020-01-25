import React from 'react';

const navStyle={
    flex:1
}

class Nav extends React.Component{
    constructor(props){
        super(props);
    }

    searchOnEnter = (event) =>{
        const isEnterPressed = event.key === 'Enter';
        
        if(isEnterPressed) this.props.search();
    };

    render() {
        return (
            <nav>
                <div style={navStyle}>
                    <input
                        onKeyPress = {this.searchOnEnter} 
                        onChange={this.props.handleSearchValueChange} 
                        value={this.props.searchValue} 
                        className="search-input"
                    />
                    <button
                        onClick={this.props.search}
                        className = "search-btn">
                        <i className="fa fa-search"></i>
                    </button>
                    <button 
                        onClick = {this.props.toggleUnit}
                        className="temp-switch">
                        <i className="fa fa-thermometer-empty">
                            <sup>°</sup>
                        </i>
                        {this.props.unit}
                    </button>
                </div>
            </nav>
        )
    }
}

export default Nav;