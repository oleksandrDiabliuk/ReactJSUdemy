import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp, onSalaryChange}) => {
    const employees = data.map(item => {
        const {id, ...itemsProps} = item;

        return (
            <EmployeesListItem 
                key={id} 
                {...itemsProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                onSalaryChange={(e) => {onSalaryChange(id, e.currentTarget.value)}}
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