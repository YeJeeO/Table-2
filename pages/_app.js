import SortableTable from '../components/SortableTable'
import "../style/style.css"

const App = () => {
    return (
        <div className="container">
        <h1 className="title mt-5">Сотрудники</h1>
                <SortableTable/>
        </div>
    );
};

export default App;