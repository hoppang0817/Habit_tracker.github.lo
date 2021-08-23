import React, { memo } from 'react';

const habit = memo((props) => {
    // const componentDidMount() {
    //    //컴포넌트가 등록이되었을때 사용자에게 보여질때 
    //     console.log(`habit:${this.props.habit.name} mounted`)
    // }

    // componentWillUnmount() {
    //     //삭제전에 사용자에게 보여지지않을때
    //      console.log(`habit:${this.props.habit.name} unMounted`)
    // }

    const handleIncrement = () => {
        const { handleIncrement } = props;
        handleIncrement(props.habit);
    };

    const handleDecrement = () => {
         const { handleDecrement } = props;
        handleDecrement(props.habit);
    };
    const handleDelete = () => {
        props.handleDelete(props.habit)
    };

    const { name, count } = props.habit;
     return (
            <li className='habit'>
                <span className='habit-name'>{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={handleIncrement}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={handleDecrement}>
                    <i class="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete" onClick={handleDelete}>
                    <i class="fas fa-trash"></i>
                </button>
            </li>
        )
});

export default habit;


// import React, { PureComponent } from 'react';

// class Habit extends PureComponent {
    
//     componentDidMount() {
//        //컴포넌트가 등록이되었을때 사용자에게 보여질때 
//         console.log(`habit:${this.props.habit.name} mounted`)
//     }

//     componentWillUnmount() {
//         //삭제전에 사용자에게 보여지지않을때
//          console.log(`habit:${this.props.habit.name} unMounted`)
//     }

//     handleIncrement = () => {
//         const { handleIncrement } = this.props;
//         handleIncrement(this.props.habit);
//     };

//     handleDecrement = () => {
//          const { handleDecrement } = this.props;
//         handleDecrement(this.props.habit);
//     };
//     handleDelete = () => {
//         this.props.handleDelete(this.props.habit)
//     };
//     render() {
//         const { name, count } = this.props.habit;
//         return (
//             <li className='habit'>
//                 <span className='habit-name'>{name}</span>
//                 <span className="habit-count">{count}</span>
//                 <button className="habit-button habit-increase" onClick={this.handleIncrement}>
//                     <i className="fas fa-plus-square"></i>
//                 </button>
//                 <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
//                     <i class="fas fa-minus-square"></i>
//                 </button>
//                 <button className="habit-button habit-delete" onClick={this.handleDelete}>
//                     <i class="fas fa-trash"></i>
//                 </button>
//             </li>
//         )
//         }
// }

// export default Habit;