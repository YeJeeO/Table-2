import React from 'react';
import SortableTable from './SortableTable'
import "../style/style.css"

const App = () => {
    return (
        <div className="container">
            <h1>Сотрудники</h1>
            
            <FetchTable/>
        </div>
    );
};

export default App;