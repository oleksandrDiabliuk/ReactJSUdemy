import './app-filter.scss';

const AppFilter = (props) =>{
    const filterButtons = [
        {name: 'all', label: 'All Employees'},
        {name: 'prom', label: 'Employees for promotion'},
        {name: 'moreThan', label: 'Salary more than 1000$'}
    ]

    const buttons = filterButtons.map(({name, label}) => {
        const isActive = props.filter === name;
        const buttonClass = isActive ? 'btn-light' : 'btn-outline-light';

        return (
            <button 
                type="button"
                className={`btn ${buttonClass}`}
                key={name}
                onClick={() => props.onFilterSelect(name)}
            >
                {label}
            </button>
        );
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )

}

export default AppFilter;
