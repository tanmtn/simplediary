import React, { useState, useEffect } from 'react';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import './App.css';

const dummyList = [
    {
        id: 1,
        author: 'tanmtn',
        content: 'hi 1',
        emotion: 1,
        created_date: new Date().getTime(),
    },
    {
        id: 2,
        author: '케로로',
        content: 'hi 2',
        emotion: 3,
        created_date: new Date().getTime(),
    },
    {
        id: 3,
        author: '쿠루루',
        content: 'hi 3',
        emotion: 5,
        created_date: new Date().getTime(),
    },
];

function App() {
    return (
        <div className="App">
            <DiaryEditor />
            <DiaryList diaryList={dummyList} />
        </div>
    );
}

export default App;
