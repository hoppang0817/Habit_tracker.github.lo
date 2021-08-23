import React, { memo } from 'react';

//memo는 class형식의 purecompoent와 같은 역활을함
const HabitAdd = memo((props) => {
     
    const inputRef = React.createRef();
    
    const onSubmit = () => {
        const name = inputRef.current.value;
        name && props.onAdd(name);
        inputRef.current.value = '';
    }

    return (
        <div className='habit'>
            <input className='add-input' ref={inputRef} />
            <button className='add-button' onClick={onSubmit}>Add</button>
        </div>
    );
});

export default HabitAdd;
