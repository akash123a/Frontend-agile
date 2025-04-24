





import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ onClose, onTaskCreated }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [assigneeName, setAssigneeName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const taskData = { title, description, assigneeName };

        try {
            const response = await axios.post('http://localhost:8094/api/tasks', taskData, {
                headers: { 'Content-Type': 'application/json' }
            });

            console.log('Task created:', response.data);
            // Clear form and close modal
            setTitle('');
            setDescription('');
            setAssigneeName('');
            if (onTaskCreated) onTaskCreated(response.data);
            if (onClose) onClose();
        } catch (error) {
            console.error('Error creating task:', error);
        }
    };

    return (
        <div className="task-form">
            <h2>Create a New Task</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Assignee User Name:</label>
                    <input
                        type="text"
                        value={assigneeName}
                        onChange={(e) => setAssigneeName(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Create Task</button>
            </form>
        </div>
    );
};

export default TaskForm;