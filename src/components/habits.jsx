import React from 'react';
import Habit from './habit';
import HabitAdd from './habitAdd';

const habits = (props) => {
    
    const handleIncrement = (habit) => {
       props.handleIncrement(habit)
    };

    const handleDecrement = (habit) => {
         const { handleDecrement } = props;
        handleDecrement(habit);
    };
    const handleDelete = (habit) => {
        props.handleDelete(habit)
    };

    const handleReset = () => {
       props.handleReset(habits)
    }

    const handelAdd = (name) => {
        props.onAdd(name)
    }


     return (
            <div>
               <HabitAdd onAdd={handelAdd}/>
            <ul>
                {
                    props.habits.map(habit => (
                        <Habit
                            key={habit.id}
                            habit={habit}
                            handleIncrement={handleIncrement}
                            handleDecrement={handleDecrement}
                            handleDelete={handleDelete}
                        />
                        ))
                    }
                    <button className='habits-reset' onClick={handleReset}>Reset All</button>
                </ul>
                </div>
        );
};

export default habits;


// import React, { Component } from 'react';
// import Habit from './habit';
// import HabitAdd from './habitAdd';

// class Habits extends Component {
//     // state = {
//     //     habits: [
//     //         { id: 1, name: 'Reading', count: 0 },
//     //         { id: 2, name: 'Running', count: 0 },
//     //         { id: 3, name: 'Coding', count: 0 },
//     //     ]
  
//     // }

//     handleIncrement = (habit) => {
//        this.props.handleIncrement(habit)
//     };

//      handleDecrement = (habit) => {
//          const { handleDecrement } = this.props;
//         handleDecrement(habit);
//     };
//     handleDelete = (habit) => {
//         this.props.handleDelete(habit)
//     };

//     handleReset = () => {
//        this.props.handleReset(this.props.habits)
//     }

//     handelAdd = (name) => {
//         this.props.onAdd(name)
//     }
  
//     render() {
//         return (
//             <div>
//                <HabitAdd onAdd={this.handelAdd}/>
//             <ul>
//                 {
//                     this.props.habits.map(habit => (
//                         <Habit
//                             key={habit.id}
//                             habit={habit}
//                             handleIncrement={this.handleIncrement}
//                             handleDecrement={this.handleDecrement}
//                             handleDelete={this.handleDelete}
//                         />
//                         ))
//                     }
//                     <button className='habits-reset' onClick={this.handleReset}>Reset All</button>
//                 </ul>
//                 </div>
//         );
//     }
// }

// export default Habits;