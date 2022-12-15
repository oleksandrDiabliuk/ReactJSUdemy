import './app-info.scss';

const AppInfo = ({employeeCount, employeeIncreaseCount}) => {
    return (
        <div className="app-info">
            <h1>Employee Accounting in company Unknown</h1>
            <h2>General employee count: {employeeCount}</h2>
            <h2>Premium will receive: {employeeIncreaseCount}</h2>
        </div>
    );
}

export default AppInfo;
