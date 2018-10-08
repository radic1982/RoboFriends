import React, {Component} from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import { connect } from 'react-redux';

import Scroll from '../component/Scroll';
import './App1.css';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return { 
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: ()=> dispatch(requestRobots())
    }
}

class App1 extends Component {
    /* constructor() {
        super();
        this.state = {
            robots: []
            // searchField: ''
        }
    } */

    componentDidMount() {
       /*  fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(users => {
            this.setState({robots: users})
        }) */
        this.props.onRequestRobots();
    }

   /*  onSearchChange = (event)=>{
        this.setState({searchField: event.target.value})
        
    } */

    render (){
        //const robotsi = this.state.robots;
        const robotsi = this.props.robots;
        const {searchField, onSearchChange} = this.props;
        const filteredRobots = robotsi.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return (
            <div className='a1'>
                <h1 className = 'ff'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
   
}
export default connect(mapStateToProps, mapDispatchToProps)(App1);