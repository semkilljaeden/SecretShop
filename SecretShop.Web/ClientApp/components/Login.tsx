import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';

enum LoginState {
    Success,
    RequireSecret,
    RequirePassword,
    Fail,
    PendingStart,
    Pending
}

export class Login extends React.Component<RouteComponentProps<{}>, LoginState> {
    constructor() {
        super();
        this.state = LoginState.PendingStart;
    }

    public submit(model: LoginModel) {

        fetch('api/SampleData/WeatherForecasts', {
            method: 'POST',
            body: JSON.stringify(model),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                } else {
                    console.log('Somthing happened wrong');
                }
            }).catch(err => err);
    }
    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Login.renderForecastsTable(this.state.forecasts);

        return <div>
            <h1>Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>;
    }

    private static renderForecastsTable(forecasts: WeatherForecast[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.dateFormatted}>
                        <td>{forecast.dateFormatted}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}

interface LoginModel {
    Username: string;
    Password: number;
    Secret: string;
    Status: LoginState;
}
