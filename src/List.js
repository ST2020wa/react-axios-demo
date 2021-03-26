import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
class TrData extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            this.props.users.map((user,i)=>{
                return (
                    <tr key={user.id} className="text-center">
                        <td>{user.name}</td>
                        <td>{user.job}</td>
                        <td>{user.salary}</td>
                        <td>{user.department}</td>
                        <td>{user.birthday}</td>
                        <td>{user.description}</td>
                    </tr>
                )
            })
        )
    }
}

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isloaded: false
        }
    }

    componentDidMount() {
        const _this = this;
        axios.get('https://605d68c39386d200171ba991.mockapi.io/lists')
            .then(function (response) {
                _this.setState({
                    users: response.data,
                    isLoaded: true
                });
            })
            .catch(function (error) {
                console.log(error);
                _this.setState({
                    isLoaded: false,
                    error: error
                })
            })
    }

    render() {
        if (!this.state.isLoaded) {
            return <div>Loading</div>
        } else {
            return (
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th className="text-center">Name</th>
                        <th className="text-center">Job</th>
                        <th className="text-center">Salary</th>
                        <th className="text-center">Department</th>
                        <th className="text-center">Birthday</th>
                        <th className="text-center">Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    <TrData users={this.state.users}/>
                    </tbody>
                </table>
            )
        }
    }
}
export default List;