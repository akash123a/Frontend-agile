import React, { useState } from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";

// Sortable Task Item
const SortableItem = SortableElement(({ task }) => (
  <div className="bg-white p-3 rounded-lg shadow mb-3 task-item" data-task-id={task.id}>
    <p className="font-semibold">{task.name}</p>
    <p className="text-sm text-gray-600">Assigned to {task.assignedTo}</p>
  </div>
));

// Sortable Task List
const SortableList = SortableContainer(({ tasks }) => (
  <div className="task-list">
    {tasks.map((task, index) => (
      <SortableItem key={task.id} index={index} task={task} />
    ))}
  </div>
));

const ProjectManagement = () => {
  // State for tasks in each column
  const [todoTasks, setTodoTasks] = useState([
    { id: 1, name: "Task 1", assignedTo: "John" },
    { id: 2, name: "Task 2", assignedTo: "Jane" },
  ]);
  const [inProgressTasks, setInProgressTasks] = useState([
    { id: 3, name: "Task 3", assignedTo: "Alice" },
  ]);
  const [reviewTasks, setReviewTasks] = useState([
    { id: 4, name: "Task 4", assignedTo: "Bob" },
  ]);
  const [doneTasks, setDoneTasks] = useState([
    { id: 5, name: "Task 5", assignedTo: "John" },
  ]);

  // Task ID counter
  const [taskIdCounter, setTaskIdCounter] = useState(6);

  // Function to add a new task
  const addNewTask = (column) => {
    const taskName = prompt("Enter task name:");
    const assignedTo = prompt("Assign to:");

    if (taskName && assignedTo) {
      const newTask = {
        id: taskIdCounter,
        name: taskName,
        assignedTo: assignedTo,
      };

      switch (column) {
        case "todo":
          setTodoTasks([...todoTasks, newTask]);
          break;
        case "inprogress":
          setInProgressTasks([...inProgressTasks, newTask]);
          break;
        case "review":
          setReviewTasks([...reviewTasks, newTask]);
          break;
        case "done":
          setDoneTasks([...doneTasks, newTask]);
          break;
        default:
          break;
      }

      setTaskIdCounter(taskIdCounter + 1);
    }
  };

  // Function to handle drag-and-drop sorting
  const onSortEnd = ({ oldIndex, newIndex }, column) => {
    switch (column) {
      case "todo":
        setTodoTasks(arrayMove(todoTasks, oldIndex, newIndex));
        break;
      case "inprogress":
        setInProgressTasks(arrayMove(inProgressTasks, oldIndex, newIndex));
        break;
      case "review":
        setReviewTasks(arrayMove(reviewTasks, oldIndex, newIndex));
        break;
      case "done":
        setDoneTasks(arrayMove(doneTasks, oldIndex, newIndex));
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <header className="bg-white shadow-md"></header>
      <div className="flex flex-1">
        <div className="w-64 bg-blue-800 text-white p-4"></div>

        <div className="flex-1 p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"></div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4">Notifications</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <h3 className="text-xl font-bold mb-4">Agile Board</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* To Do Column */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold mb-4">To Do</h4>
                <SortableList
                  tasks={todoTasks}
                  onSortEnd={(e) => onSortEnd(e, "todo")}
                  lockAxis="y"
                />
                <button
                  className="mt-2 text-blue-500 hover:text-blue-700"
                  onClick={() => addNewTask("todo")}
                >
                  New Task
                </button>
              </div>

              {/* In Progress Column */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold mb-4">In Progress</h4>
                <SortableList
                  tasks={inProgressTasks}
                  onSortEnd={(e) => onSortEnd(e, "inprogress")}
                  lockAxis="y"
                />
                <button
                  className="mt-2 text-blue-500 hover:text-blue-700"
                  onClick={() => addNewTask("inprogress")}
                >
                  New Task
                </button>
              </div>

              {/* Review Column */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold mb-4">Review</h4>
                <SortableList
                  tasks={reviewTasks}
                  onSortEnd={(e) => onSortEnd(e, "review")}
                  lockAxis="y"
                />
                <button
                  className="mt-2 text-blue-500 hover:text-blue-700"
                  onClick={() => addNewTask("review")}
                >
                  New Task
                </button>
              </div>

              {/* Done Column */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold mb-4">Done</h4>
                <SortableList
                  tasks={doneTasks}
                  onSortEnd={(e) => onSortEnd(e, "done")}
                  lockAxis="y"
                />
                <button
                  className="mt-2 text-blue-500 hover:text-blue-700"
                  onClick={() => addNewTask("done")}
                >
                  New Task
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-blue-800 text-white p-4 text-center"></footer>
    </div>
  );
};

export default ProjectManagement;