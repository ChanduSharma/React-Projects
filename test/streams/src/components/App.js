import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';

const App = () => {

    return (
        <div className='ui container'>
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path='/' element={<Header />} />
                    </Routes>
                    <Routes>
                        <Route path='/' exact element={<StreamList />} />
                        <Route path='/streams/new' exact element={<StreamCreate />} />
                        <Route path='/streams/delete' exact element={<StreamDelete />} />
                        <Route path='/streams/edit' exact element={<StreamEdit />} />
                        <Route path='/streams/show' exact element={<StreamShow />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;