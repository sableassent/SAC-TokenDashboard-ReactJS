import * as React from 'react';


class Search extends React.Component {
    
    render() {
        return(
            <div id="search">
                <input type="text" placeholder="Search here..."/>
                <button type="submit" className="tip-bottom" title="Search"><i className="icon-search icon-white"></i></button>
            </div>
        )
    }
}

export default Search;