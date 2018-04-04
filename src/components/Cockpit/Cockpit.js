import React from 'react';
import './Cockpit.css'
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
            backgroundColor: 'lightgreen',
            color: 'black'
        }
    };

    let classes = [];
    if (props.persons.length <= 3){
        classes.push('red');
    }
    if (props.persons.length <= 2){
        classes.push('bold');
    }
    if(props.showPersons){
        style.backgroundColor = 'red';
    }

      return(
          <Aux>
              <h1>{props.appTitle}</h1>
              <p className={classes.join(' ')}>Application</p>
              <button
                  style={style}
                  onClick={props.clicked}>Toggle Persons</button>
          </Aux>
      );
};

export default cockpit;