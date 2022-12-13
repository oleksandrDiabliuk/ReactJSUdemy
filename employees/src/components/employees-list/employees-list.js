import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleLike}) => {
    const employees = data.map(item => {
        const {id, ...itemsProps} = item;

        return (
            <EmployeesListItem 
                key={id} 
                {...itemsProps}
                onDelete={() => onDelete(id)}
                onToggleIncrease={() => onToggleIncrease(id)}
                onToggleLike={() => onToggleLike(id)}
            />
        );
    });

    return (
        <ul className="app-list list-group">
            {employees}
        </ul>
    );
}

export default EmployeesList;