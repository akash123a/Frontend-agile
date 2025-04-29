
// import React, { useState } from 'react';
// import axios from 'axios';

// const TaskForm = ({ onClose, onTaskCreated }) => {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [assigneeName, setAssigneeName] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const taskData = { title, description, assigneeName };

//         try {
//             const response = await axios.post('http://localhost:8094/api/tasks', taskData, {
//                 headers: { 'Content-Type': 'application/json' }
//             });

//             console.log('Task created:', response.data);
//             // Clear form and close modal
//             setTitle('');
//             setDescription('');
//             setAssigneeName('');
//             if (onTaskCreated) onTaskCreated(response.data);
//             if (onClose) onClose();
//         } catch (error) {
//             console.error('Error creating task:', error);
//         }
//     };

//     return (
//         <div className="task-form">
//             <h2>Create a New Task</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Title:</label>
//                     <input
//                         type="text"
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Description:</label>
//                     <textarea
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Assignee User Name:</label>
//                     <input
//                         type="text"
//                         value={assigneeName}
//                         onChange={(e) => setAssigneeName(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Create Task</button>
//             </form>
//         </div>
//     );
// };

// export default TaskForm;








import React, { useState } from 'react';
import axios from 'axios';
import './TaskForm.css'; // Create this CSS file

const TaskForm = ({ onClose, onTaskCreated }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [assigneeName, setAssigneeName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        const taskData = { title, description, assigneeName };

        try {
            const response = await axios.post('http://localhost:8094/api/tasks', taskData, {
                headers: { 'Content-Type': 'application/json' }
            });

            if (onTaskCreated) onTaskCreated(response.data);
            handleClose();
        } catch (error) {
            console.error('Error creating task:', error);
            setError('Failed to create task. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        setTitle('');
        setDescription('');
        setAssigneeName('');
        setError('');
        if (onClose) onClose();
    };

    return (
        <div className="form-overlay">
            <div className="task-form-container">
                <div className="form-header">
                    <h2>Create New Task</h2>
                    <button className="close-btn" onClick={handleClose}>&times;</button>
                </div>

                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Task Title</label>
                        <input
                            id="title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter task title"
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Describe the task details..."
                            rows="4"
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="assignee">Assignee</label>
                        <input
                            id="assignee"
                            type="text"
                            value={assigneeName}
                            onChange={(e) => setAssigneeName(e.target.value)}
                            placeholder="Enter assignee's username"
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="form-actions">
                        <button
                            type="submit"
                            className="submit-btn"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Creating...' : 'Create Task'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TaskForm;