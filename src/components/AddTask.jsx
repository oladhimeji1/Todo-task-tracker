import { useState } from "react";

function AddTask({ onAdd }) {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text && !day){
            alert('Please add some task'); 
        } else{
            onAdd({ text, day, reminder})
            setText('')
            setDay('')
            setReminder(false)
        }
    }

    return (
        <form onSubmit = { onSubmit } className="add-form">
            <div className="form-control">
                <label htmlFor="Task">Task To Do</label>
                <input type="text" placeholder="Add Task To Do"
                value={ text } onChange={(e)=>setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label htmlFor="D&T">Day & Time</label>
                <input type="text" placeholder="Eg, Jan 2022, at 2:30pm"
                value = { day } onChange = { (e) => setDay(e.target.value) } />
            </div>
            <div className="form-control-check">
                <label htmlFor="Reminder">Set Reminder</label>
                <input type="checkbox" 
                checked={reminder}
                value={ reminder } 
                onChange={(e)=>setReminder(e.currentTarget.checked)}/>
            </div>
            <button className="btn btn-block">
            Save Task
            </button>
        </form>
    );
}

export default AddTask;
