import './employees-list-item.css';

const EmployeesListItem = (props) => {
    const { name, salary, onDelete, onToggleProp, onSalaryChange, increase, prom } = props;

    let classNames = "list-group-item d-flex justify-content-between";

    if (increase) {
        classNames += " increase";
    }

    if (prom) {
        classNames += " prom";
    }

    return (
        <li className={classNames}>
            <span 
                className="list-group-item-label"
                data-toggle="prom"
                onClick={onToggleProp}
            >
                {name}
            </span>
            <input 
                type="text" 
                className="list-group-item-input" 
                defaultValue={salary + '$'}
                onChange={onSalaryChange}
            />
            <div className='d-flex justify-content-center align-items-center'>
                <button 
                    type="button"
                    className="btn-cookie btn-sm"
                    data-toggle="increase"
                    onClick={onToggleProp}
                >
                    <i className="fas fa-cookie"></i>
                </button>

                <button 
                    type="button"
                    className="btn-trash btn-sm "
                    onClick={onDelete}
                >
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;