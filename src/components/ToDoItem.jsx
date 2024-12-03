import PropTypes from 'prop-types';

const ToDoItem = ({ task, deleteTask, markAsCompleted }) => {
  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          cursor: 'pointer',
        }}
      >
        {task.text}
      </span>
      {!task.completed && (
        <button onClick={() => markAsCompleted(task.id)}>
          Mark as Done
        </button>
      )}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

ToDoItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  deleteTask: PropTypes.func.isRequired,
  markAsCompleted: PropTypes.func.isRequired,
};

export default ToDoItem;
