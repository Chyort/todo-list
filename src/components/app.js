import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import AddItem from './add_item';
import List from './list';
import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            list: []
        };

        this.base_url = 'http://api.reactprototypes.com';
        this.api_key = '?key=blabbermouth';
    }

    componentDidMount(){
        this.getListData();
    }

    async addItem(item){
        try{
            const resp = await axios.post(`${this.base_url}/todos${this.api_key}`, item);

            this.getListData();
        } catch (err) {
            console.log('Error adding item:', err.response.data.error);
        }
    }

    async getListData(){

        try {
            const resp = await axios.get(`${this.base_url}/todos${this.api_key}`);

            this.setState({
                list: resp.data.todos
            });
        } catch (err) {
            console.log('Get Data Error:', err.message);
        }

    }

    render(){
        console.log('App State:', this.state);

        return (
            <div className="container">
                <h1 className="center">To Do List</h1>
                <AddItem add={this.addItem.bind(this)}/>
                <List data={this.state.list}/>
            </div>
        );
    }
}

export default App;
