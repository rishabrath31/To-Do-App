import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';

const ToDoList = ({ tasks, deleteTask, markAsCompleted }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          markAsCompleted={markAsCompleted}
        />
      ))}
    </ul>
  );
};

ToDoList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  deleteTask: PropTypes.func.isRequired,
  markAsCompleted: PropTypes.func.isRequired,
};

export default ToDoList;
