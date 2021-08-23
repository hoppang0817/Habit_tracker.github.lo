import React, { memo } from 'react';

const header = memo((props) => {
     return (
            <div className='navbar'>
                <i className='navbar-logo fas fa-leaf'></i>
                <span>Habit Tracker</span>
                <span className='navbar-count'>{props.totalCount}</span>
            </div>
        );
});

export default header;



// import React, { PureComponent } from 'react';
// class Header extends PureComponent {
//     render() {
//         return (
//             <div className='navbar'>
//                 <i className='navbar-logo fas fa-leaf'></i>
//                 <span>Habit Tracker</span>
//                 <span className='navbar-count'>{this.props.totalCount}</span>
//             </div>
//         );
//     }
// }

// export default Header;