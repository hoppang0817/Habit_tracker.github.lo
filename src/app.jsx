// import React, { useCallback, useState } from 'react';
// import './app.css';
// import Habits from './components/habits';
// import Header from './components/header';

// const App = () => {
//   const [habits, setHabits] = useState([
//     { id: 1, name: 'Reading', count: 0 },
//     { id: 2, name: 'Running', count: 0 },
//     { id: 3, name: 'Coding', count: 0 },
//   ]);

//   console.log(habits);
//   const handleIncrement = useCallback((habit) => {
//     habits.map(item => {
//       if (item.id === habit.id) {
//         return { ...habit, count: habit.count + 1 };
//       }
//       return item;
//     });
//     setHabits({ habits })
//   },[]);

//   const handleDecrement = (habit) => {
//     const habits = habits.map(item => {
//       if (item.id === habit.id) {
//         const count = habit.count - 1;
//         return { ...habit, count: count < 0 ? 0 : count };
//       }
//       return item;
//     })
//     setHabits({ habits })
//   };

//   const handleDelete = (habit) => {
//     console.log('handlDelete', habit);
//     habits.filter(item => item.id !== habit.id);
//     setHabits({ habits })
//   };

//   const handleReset = () => {
//     habits.map(item => {
//       if (item.count > 0) {
//         return { ...item, count: 0 };
//       }
//       return item;
//     })
//     setHabits({ habits })
//   }
 
//   const handelAdd = (name) => {
//     const habits = [
//       ...habits,
//       { id: habits.length + 1, name: name, count: 0 }
//     ]
//     setHabits({ habits })
//   }
//   return (
//       <div>
//         <Header habits={habits} totalCount={habits.filter(item=> item.count >0).length} />
//         <Habits
//           habits={habits}
//           handleIncrement={handleIncrement}
//           handleDecrement={handleDecrement}
//           handleDelete={handleDelete}
//           handleReset={handleReset}
//           onAdd={handelAdd}
//         />
//       </div>
//     );

// };
// export default App;


import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Header from './components/header';


class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ]
  
  }
  handleIncrement = habit => {
    // console.log('handleIncrement', habit);
    // const habits = [...this.state.habits]; //새로운 state 안에 있는 habits를 복사
    // const index = habits.indexOf(habit); //인덱스값을 알아낼수있는 함수 indexOf를 사용하여 habit이 몇번째 값인지 알아낸다
    // habits[index].count++;//새로운 habits에 인덱스 번째의 count를 1더한다
    // this.setState({ habit: habit })//키 : 속성값
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
     this.setState({ habits })
  };

  handleDecrement = (habit) => {
    // console.log('handleDecrement', habit);
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count = habits[index].count - 1 < 0 ? 0 : habits[index].count - 1;
    // this.setState({ habits: habits });
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    })
    this.setState({habits})
  };

  handleDelete = (habit) => {
    console.log('handlDelete', habit);
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // console.log(index)
    // habits.splice(habits[index],1)
    // habits.filter(habits[index])
    // this.setState({ habits: habits });
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits: habits })
  };

  handleReset = () => {
    // console.log('reset', habit)
    // const habits = [...this.state.habits]
    // habits.map(habit => (
    //   habit.count=0
    // ))
    // this.setState({ habits })
    const habits = this.state.habits.map(item => {
      if (item.count > 0) {
        return { ...item, count: 0 };
      }
      return item;
    })
    this.setState({habits})
  }
  //inputRef = React.createRef();
  // onSubmit = (e) => {
  //   console.log(this.inputRef.current.value)
  //   const name = this.inputRef.current.value
  //   const habits = [...this.state.habits, {id:this.state.habits.length+1,name:name,count:0}]
  //   this.setState({
  //    habits:habits
  //   })
  //   this.inputRef.current.value = '';
  // }
  handelAdd = (name) => {
    const habits = [
      ...this.state.habits,
      { id: this.state.habits.length + 1, name: name, count: 0 }
    ]
    this.setState({
     habits:habits
    })
  }
  render() {
    return (
      <div>
        <Header habits={this.state.habits} totalCount={this.state.habits.filter(item=> item.count >0).length} />
        <Habits
          habits={this.state.habits}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleDelete={this.handleDelete}
          handleReset={this.handleReset}
          onAdd={this.handelAdd}
        />
      </div>
    );
  }
}

export default App;