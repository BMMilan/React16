import React from 'react';
import './Cockpit.css'

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
    if (props.persons.length <= 1){
        classes.push('red');
    }
    if (props.persons.length <= 0){
        classes.push('bold');
    }
    if(props.showPersons){
        style.backgroundColor = 'red';
    }

      return(
          <div>
              <h1>React</h1>
              <p className={classes.join(' ')}>Application</p>
              <button
                  style={style}
                  onClick={props.clicked}>Toggle Persons</button>
          </div>
      );
};

export default cockpit;