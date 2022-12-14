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
                    like: true,
                    id: 1
                },
                {
                    name: 'Sarah M.', 
                    salary: 1000,
                    increase: false,
                    like: false,
                    id: 2
                },
                {
                    name: 'Carl W.', 
                    salary: 1100,
                    increase: false,
                    like: false,
                    id: 3
                },
            ]
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
            like: false,
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

    render() {
        const employeesCount = this.state.data.length;
        const employeeIncreaseCount = this.state.data.filter(item => item.increase).length; 

        return (
            <div className="app">
                <AppInfo employeeCount={employeesCount} employeeIncreaseCount={employeeIncreaseCount}/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data={this.state.data} 
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm onAddItem={this.addItem}/>
            </div>
        );
    }
}

export default App;