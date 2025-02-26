
import React from 'react';
import Stars from './Stars';
import './App.css'; 

function App() {
    return (
        <div>
            <h1>Список фильмов</h1>
            <Stars count={1} /> {/* Пример использования компонента Stars */}
        </div>
    );
}

export default App;