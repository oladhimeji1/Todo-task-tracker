
function Task({task, onDelete, onToggle}) {
    return (
        <div title='Double click here to toggle reminder'
        className={`task ${task.reminder ?
        'reminder' : '' }`}
        onDoubleClick = {() => onToggle(task.id)}>

            <h3 
            >{ task.text }
            <i style={iconStyle}
             className="fa fa-trash"
             onClick={() => onDelete(task.id) }></i>
            </h3>

            <span>{ task.day } </span>
            {task.reminder ? <small>(completed)</small> : <small>(pending)</small> }
        </div>
    );
}

const iconStyle ={
    color: 'red',
    cursor: 'pointer'
}

export default Task;
