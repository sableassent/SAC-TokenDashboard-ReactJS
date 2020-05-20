import * as React from 'react';
import Header from '../header/header';
import Search from '../search/search';



class Head extends React.Component {

    render() {
        return(
            <React.Fragment>
                <Header />
                <Search />
            </React.Fragment>
        );
    }
}

export default Head;