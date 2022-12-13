import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button 
                type="button"
                className="btn btn-light"
            >
                All Employees
            </button>
            <button 
                type="button"
                className="btn btn-outline-light"
            >
                Employees for promotion
            </button>
            <button 
                type="button"
                className="btn btn-outline-light"
            >
                Salary more than 1000$
            </button>
        </div>
    )
}

export default AppFilter;
