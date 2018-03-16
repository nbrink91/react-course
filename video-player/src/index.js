import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBKe4Ucei2A6NhX4eUHLX-HgZ5K8DpEQYU';

const App = () => {
    return <div>
        <SearchBar/>
    </div>;
};

ReactDOM.render(<App/>, document.querySelector('.container'));