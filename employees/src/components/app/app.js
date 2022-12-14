import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.maxID = 4;
        this.state = {
            data: [
                {
                    name: 'John C.', 
                    salary: 800,
                    increase: true,
                    prom: true,
                    id: 1
                },
                {
                    name: 'Sarah M.', 
                    salary: 1000,
                    increase: false,
                    prom: false,
                    id: 2
                },
                {
                    name: 'Carl W.', 
                    salary: 1100,
                    increase: false,
                    prom: false,
                    id: 3
                },
            ],
            term: '',
            filter: 'all'
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {            
            const modifiedData = data.filter(item => item.id !== id);

            return {
                data: modifiedData
            };
        });
    }

    addItem = (name, salary) => {
        const newEmployee = {
            name, 
            salary, 
            increase: false,
            prom: false,
            id: this.maxID++
        }

        this.setState(({data}) => {
            const newArr = [...data, newEmployee];

            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }

                return item;
            })
        }))
    }

    searchEmployee = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    filterData = (items, filter) => {
        switch (filter) {
            case 'prom': 
                return items.filter(item => item.prom);
            case 'moreThan': 
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    render() {
        const { data, term, filter } = this.state;
        const employeesCount = this.state.data.length;
        const employeeIncreaseCount = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterData(this.searchEmployee(data, term), filter) 

        return (
            <div className="app">
                <AppInfo employeeCount={employeesCount} employeeIncreaseCount={employeeIncreaseCount}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
    
                <EmployeesList 
                    data={visibleData} 
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm onAddItem={this.addItem}/>
            </div>
        );
    }
}

export default App;