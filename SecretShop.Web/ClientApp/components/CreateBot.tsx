import * as React from 'react';
import { RouteComponentProps } from 'react-router';


export class CreateBot extends React.Component<RouteComponentProps<{}>, {}> {
    constructor() {
        super();
        this.state = { currentCount: 0 };
    }

    public render() {
        return CreateBot.loginBox();
    }

    static loginBox() {
        return <div>
                <label><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required />

                <label><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />

                <button type="submit">Login</button>
              </div>;
    }
}
