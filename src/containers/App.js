import React, { PureComponent } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/WithClass';

class App extends PureComponent {
    constructor(props){
        super(props);
        console.log('[App.js] Inside Constructor', props);
        this.state = {
            persons: [
                {id: 1, name: 'Brka', age: 24},
                {id: 2, name: 'Mare', age: 30},
                {id: 3, name: 'Zdravko', age: 25},
                {id: 4, name: 'Rista', age: 25}

            ],
            otherState: 'some other value',
            showPersons: false,
            toggleClicked: 0
        };
    }

    componentWillMount(){
        console.log('[App.js] Inside componentWillMount()');
    }

    componentDidMount(){
        console.log('[App.js] Inside componentDidMount()');
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
    //     return nextState.persons !== this.state.persons ||
    //         nextState.showPersons !== this.state.showPersons;
    // }

    componentWillUpdate(nextProps, nextState){
        console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
    }
    componentDidUpdate(){
        console.log('[UPDATE App.js] Inside componentDidUpdate');
    }

    // state = {
    //     persons: [
    //         {id: 1, name: 'Milan', age: 24},
    //         {id: 2, name: 'Mare', age: 30}
    //     ],
    //     otherState: 'some other value',
    //     showPersons: false
    // };

    nameChangedHandler = ( event, id) => {
        const personIndex = this.state.persons.findIndex( p => {
            return p.id === id;
        } );

        const person = {
            ...this.state.persons[personIndex]
        };
        //const person = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.name;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState( {persons: persons});
    };

    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons.slice();
        //const persons = [...this.state.showPersons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState( (prevState, props) => {
            return {
                showPersons: !doesShow,
                toggleClicked: prevState.toggleClicked + 1
            }
        });

    };

    render() {
        console.log('[App.js] Inside render()');
        let persons = null;

        if (this.state.showPersons){
            persons = <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
                        />;
        }

    return (
              <Aux>
                  <button onClick={() => {this.setState({showPersons: true})} }>Show Persons</button>
                    <Cockpit
                        appTitle={this.props.title}
                        showPersons ={this.state.showPersons}
                        persons={this.state.persons}
                        clicked={this.togglePersonsHandler}
                    />
                    {persons}
              </Aux>
    );
  }
}

export default withClass(App, "App");
