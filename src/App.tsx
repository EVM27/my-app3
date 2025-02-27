
import React from 'react';
import Stars from './Stars';
import './App.css'; 

function App() {
    return (
        <div>
            <h1>Список фильмов</h1>
            <h2>Рейтинг фильма</h2>
            <Stars count={3} /> {/* Пример использования компонента Stars */}
        </div>
    );
}

export default App;