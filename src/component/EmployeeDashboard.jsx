// import { useState, useCallback } from 'react';
// import { Hand as DragHandle, Plus, Settings2, Search, ChevronDown, X, LogOut } from 'lucide-react';
// import TaskForm from './TaskForm';
// import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Grid, Button, IconButton, MenuItem } from '@mui/material';
// import { Mail, Send, Close } from '@mui/icons-material';

// const EmployeeDashboard = () => {
//   // State Management
//   const [columns, setColumns] = useState([
//     {
//       id: 'todo',
//       title: 'TO DO',
//       tasks: [
//         { id: 'MBA-5', title: '(Sample) Two-Factor Authentication Setup', tag: 'USER AUTHENTICATION', priority: 'high' },
//         { id: 'MBA-8', title: '(Sample) Password Recovery Implementation', tag: 'USER AUTHENTICATION', priority: 'medium' }
//       ]
//     },
//     {
//       id: 'progress',
//       title: 'IN PROGRESS',
//       tasks: [
//         { id: 'MBA-7', title: 'kunan', tag: '', priority: 'medium' },
//         { id: 'MBA-6', title: '(Sample) Implement Biometric Login', tag: 'USER AUTHENTICATION', priority: 'high' }
//       ]
//     },
//     {
//       id: 'done',
//       title: 'DONE',
//       tasks: [
//         { id: 'MBA-3', title: '(Sample) Initiate Fund Transfer', tag: 'TRANSACTION MANAGEMENT', priority: 'low' },
//         { id: 'MBA-4', title: '(Sample) View Transaction History', tag: 'TRANSACTION MANAGEMENT', priority: 'medium' }
//       ]
//     }
//   ]);

//   const handleLogout = () => {
//     window.location.href = "/Employee-Login";
//   };

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isNewColumnModalOpen, setIsNewColumnModalOpen] = useState(false);
//   const [newColumnName, setNewColumnName] = useState('');

//   // Column Management
//   const handleAddColumn = () => {
//     if (!newColumnName.trim()) return;
    
//     const newColumn = {
//       id: `col-${Date.now()}`,
//       title: newColumnName,
//       tasks: []
//     };
    
//     setColumns([...columns, newColumn]);
//     setIsNewColumnModalOpen(false);
//     setNewColumnName('');
//   };

//   const handleRemoveColumn = (columnId) => {
//     if (window.confirm('Are you sure you want to delete this column and all its tasks?')) {
//       setColumns(prev => prev.filter(col => col.id !== columnId));
//     }
//   };

//   // Drag and Drop
//   const handleDragStart = (e, task, columnId) => {
//     e.dataTransfer.setData('task', JSON.stringify(task));
//     e.dataTransfer.setData('sourceColumnId', columnId);
//   };

//   const handleDragOver = (e) => e.preventDefault();

//   const handleDrop = (e, targetColumnId) => {
//     e.preventDefault();
//     const task = JSON.parse(e.dataTransfer.getData('task'));
//     const sourceColumnId = e.dataTransfer.getData('sourceColumnId');

//     setColumns(prev => 
//       prev.map(col => {
//         if (col.id === sourceColumnId) return { ...col, tasks: col.tasks.filter(t => t.id !== task.id) };
//         if (col.id === targetColumnId) return { ...col, tasks: [...col.tasks, task] };
//         return col;
//       })
//     );
//   };

//   // Task Management
//   const handleTaskCreated = (taskData) => {
//     const newTask = {
//       id: `MBA-${Math.floor(Math.random() * 1000)}`,
//       title: taskData.title,
//       description: taskData.description,
//       priority: 'medium',
//       tag: '',
//       assigneeName: taskData.assigneeName
//     };

//     setColumns(prev => 
//       prev.map(col => 
//         col.id === 'todo' ? { ...col, tasks: [...col.tasks, newTask] } : col
//       )
//     );
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Simplified Sidebar */}
//       <div className="w-64 bg-white border-r relative">
//         <div className="absolute bottom-0 left-0 w-full p-4 border-t bg-white">
//           <button
//             onClick={handleLogout}
//             className="w-full flex items-center justify-center gap-2 py-2 px-4 text-sm text-red-600 hover:bg-gray-100 rounded"
//           >
//             <LogOut className="w-4 h-4" />
//             Logout
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 overflow-hidden relative">
//         {/* Header */}
//         <div className="bg-white border-b p-4">
//           <div className="flex items-center justify-between">
//             <h1 className="text-4xl font-semibold">Task Board</h1>
//             <div className="flex items-center space-x-4">
//               <button className="p-2 hover:bg-gray-100 rounded">
//                 <Settings2 className="w-5 h-5 text-gray-600" />
//               </button>
//             </div>
//           </div>

//           <div className="flex items-center space-x-4 mt-4">
//             <div className="relative">
//               <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="pl-9 pr-4 py-2 border rounded-md w-64"
//               />
//             </div>
//             <button className="flex items-center space-x-1 px-3 py-2 border rounded-md">
//               <span>Epic</span>
//               <ChevronDown className="w-4 h-4" />
//             </button>
//           </div>
//         </div>

//         {/* Board */}
//         <div className="flex p-6 space-x-6 overflow-x-auto h-[calc(100vh-160px)]">
//           {columns.map(column => (
//             <div
//               key={column.id}
//               className="bg-gray-50 rounded-lg p-4 w-80 flex-shrink-0 relative group"
//               onDragOver={handleDragOver}
//               onDrop={(e) => handleDrop(e, column.id)}
//             >
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="font-medium">{column.title}</h3>
//                 <div className="flex items-center space-x-2">
//                   <span className="text-gray-500">{column.tasks.length}</span>
//                   <button
//                     onClick={() => handleRemoveColumn(column.id)}
//                     className="text-gray-400 hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100"
//                     title="Delete column"
//                   >
//                     <X className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>

//               <div className="space-y-3">
//                 {column.tasks.map(task => (
//                   <div
//                     key={task.id}
//                     draggable
//                     onDragStart={(e) => handleDragStart(e, task, column.id)}
//                     className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 cursor-move"
//                   >
//                     <div className="flex items-start justify-between">
//                       <div className="flex-1">
//                         <div className="flex items-center space-x-2 mb-2">
//                           <input type="checkbox" className="rounded" />
//                           <span className="text-sm text-blue-600">{task.id}</span>
//                           <span className={`text-xs px-2 py-0.5 rounded ${
//                             task.priority === 'high' ? 'bg-red-100 text-red-700' :
//                             task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
//                             'bg-green-100 text-green-700'
//                           }`}>
//                             {task.priority}
//                           </span>
//                         </div>
//                         <p className="text-sm">{task.title}</p>
//                         {task.tag && (
//                           <span className="inline-block mt-2 px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded">
//                             {task.tag}
//                           </span>
//                         )}
//                         {task.assigneeName && (
//                           <div className="mt-2 text-xs text-gray-500">
//                             Assignee: {task.assigneeName}
//                           </div>
//                         )}
//                       </div>
//                       <DragHandle className="w-4 h-4 text-gray-400" />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}

//           <div className="w-80 flex-shrink-0">
//             <button
//               onClick={() => setIsNewColumnModalOpen(true)}
//               className="w-full h-full bg-gray-100 hover:bg-gray-200 rounded-lg p-4 flex items-center justify-center transition-colors"
//             >
//               <Plus className="w-5 h-5 mr-2" />
//               Add Column
//             </button>
//           </div>
//         </div>

//         {/* Floating Action Button */}
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="fixed bottom-8 right-8 w-14 h-14 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-110"
//         >
//           <Plus className="w-6 h-6 text-white" />
//         </button>
//       </div>

//       {/* Modals */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center">
//           <div className="bg-white rounded-lg p-6 w-[500px]">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-semibold">Create Task</h2>
//               <button 
//                 onClick={() => setIsModalOpen(false)} 
//                 className="bg-rose-500 text-white p-1.5 rounded-full hover:bg-rose-600 transition-colors"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             </div>
//             <TaskForm 
//               onClose={() => setIsModalOpen(false)}
//               onTaskCreated={handleTaskCreated}
//             />
//           </div>
//         </div>
//       )}

//       {isNewColumnModalOpen && (
//         <div className="fixed inset-0 bg-gray-200 bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white rounded-lg p-6 w-96">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-semibold">Create New Column</h2>
//               <button onClick={() => setIsNewColumnModalOpen(false)} className="text-gray-500 hover:text-gray-700">
//                 <X className="w-5 h-5" />
//               </button>
//             </div>

//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Column Name</label>
//                 <input
//                   type="text"
//                   value={newColumnName}
//                   onChange={(e) => setNewColumnName(e.target.value)}
//                   className="w-full px-3 py-2 border rounded-md"
//                   placeholder="Enter column name"
//                 />
//               </div>
              
//               <div className="flex justify-end space-x-3 mt-6">
//                 <button onClick={() => setIsNewColumnModalOpen(false)} className="px-4 py-2 border rounded-md hover:bg-gray-50">
//                   Cancel
//                 </button>
//                 <button onClick={handleAddColumn} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
//                   Create Column
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EmployeeDashboard;























//====================================================================================================

import React, { useState, useCallback } from 'react';
import { Hand as DragHandle, Plus, Settings2, Search, ChevronDown, X, LogOut } from 'lucide-react';
import TaskForm from './TaskForm';
import { motion, AnimatePresence } from 'framer-motion';

const EmployeeDashboard = () => {
  const [columns, setColumns] = useState([
    {
      id: 'todo',
      title: 'TO DO',
      tasks: [
        { id: 'MBA-5', title: 'Two-Factor Authentication Setup', tag: 'SECURITY', priority: 'high' },
        { id: 'MBA-8', title: 'Password Recovery Implementation', tag: 'AUTH', priority: 'medium' }
      ]
    },
    {
      id: 'progress',
      title: 'IN PROGRESS',
      tasks: [
        { id: 'MBA-7', title: 'User Dashboard Redesign', tag: 'UI/UX', priority: 'medium' },
        { id: 'MBA-6', title: 'Biometric Login Integration', tag: 'AUTH', priority: 'high' }
      ]
    },
    {
      id: 'done',
      title: 'DONE',
      tasks: [
        { id: 'MBA-3', title: 'Fund Transfer Module', tag: 'PAYMENTS', priority: 'low' },
        { id: 'MBA-4', title: 'Transaction History View', tag: 'REPORTS', priority: 'medium' }
      ]
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewColumnModalOpen, setIsNewColumnModalOpen] = useState(false);
  const [newColumnName, setNewColumnName] = useState('');

  // Column Management
  const handleAddColumn = () => {
    if (!newColumnName.trim()) return;
    const newColumn = {
      id: `col-${Date.now()}`,
      title: newColumnName,
      tasks: []
    };
    setColumns([...columns, newColumn]);
    setIsNewColumnModalOpen(false);
    setNewColumnName('');
  };

  const handleRemoveColumn = (columnId) => {
    if (window.confirm('Delete this column and all its tasks?')) {
      setColumns(prev => prev.filter(col => col.id !== columnId));
    }
  };

  // Drag and Drop
  const handleDragStart = (e, task, columnId) => {
    e.dataTransfer.setData('task', JSON.stringify(task));
    e.dataTransfer.setData('sourceColumnId', columnId);
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e, targetColumnId) => {
    e.preventDefault();
    const task = JSON.parse(e.dataTransfer.getData('task'));
    const sourceColumnId = e.dataTransfer.getData('sourceColumnId');

    setColumns(prev => prev.map(col => {
      if (col.id === sourceColumnId) return { ...col, tasks: col.tasks.filter(t => t.id !== task.id) };
      if (col.id === targetColumnId) return { ...col, tasks: [...col.tasks, task] };
      return col;
    }));
  };

  // Task Management
  const handleTaskCreated = (taskData) => {
    const newTask = {
      id: `MBA-${Math.floor(Math.random() * 1000)}`,
      ...taskData,
      priority: 'medium',
      tag: ''
    };
    setColumns(prev => prev.map(col => 
      col.id === 'todo' ? { ...col, tasks: [newTask, ...col.tasks] } : col
    ));
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Enhanced Sidebar */}
      <motion.div 
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        className="w-64 bg-white border-r shadow-lg flex flex-col"
      >
        <div className="p-4 border-b">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-lg">
              <span className="text-2xl">👤</span>
            </div>
            <div>
              <h2 className="font-semibold text-gray-800">Employee Dashboard</h2>
              <p className="text-sm text-gray-500">Task Management</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <nav className="space-y-2">
            <button className="w-full flex items-center space-x-3 p-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <span className="text-blue-500">📌</span>
              <span>My Tasks</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <span className="text-green-500">✅</span>
              <span>Completed</span>
            </button>
          </nav>
        </div>

        <div className="border-t p-4">
          <button
            onClick={() => window.location.href = "/Employee-Login"}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-white border-b p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-800">
              Task Board
              <span className="ml-2 text-blue-500 text-lg font-normal">
                • {columns.reduce((acc, col) => acc + col.tasks.length, 0)} Tasks
              </span>
            </h1>
            <div className="flex items-center space-x-3">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search tasks..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Board */}
        <div className="flex-1 p-6 space-x-6 overflow-x-auto scroll-smooth">
          <AnimatePresence>
            {columns.map(column => (
              <motion.div
                key={column.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-4 w-80 flex-shrink-0 shadow-md border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-gray-800">{column.title}</h3>
                    <span className="px-2.5 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
                      {column.tasks.length}
                    </span>
                  </div>
                  <button
                    onClick={() => handleRemoveColumn(column.id)}
                    className="text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  <AnimatePresence>
                    {column.tasks.map(task => (
                      <motion.div
                        key={task.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        whileHover={{ y: -2 }}
                        draggable
                        onDragStart={(e) => handleDragStart(e, task, column.id)}
                        className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 cursor-move hover:shadow-md transition-all"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                task.priority === 'high' ? 'bg-red-100 text-red-700' :
                                task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                                'bg-green-100 text-green-700'
                              }`}>
                                {task.priority}
                              </span>
                              <span className="text-sm text-blue-600 font-mono">{task.id}</span>
                            </div>
                            <p className="text-gray-800 font-medium">{task.title}</p>
                            {task.tag && (
                              <span className="inline-block mt-2 px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-full">
                                {task.tag}
                              </span>
                            )}
                          </div>
                          <DragHandle className="w-4 h-4 text-gray-400 mt-1" />
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsNewColumnModalOpen(true)}
            className="w-80 flex-shrink-0 h-min bg-white hover:bg-gray-50 rounded-xl p-4 flex items-center justify-center transition-colors border-2 border-dashed border-gray-300"
          >
            <Plus className="w-5 h-5 mr-2 text-gray-600" />
            <span className="text-gray-600 font-medium">Add Column</span>
          </motion.button>
        </div>

        {/* Floating Action Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          className="fixed bottom-8 right-8 w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-lg ring-4 ring-blue-100/50"
        >
          <Plus className="w-6 h-6 text-white" />
        </motion.button>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-xl p-6 w-[500px] shadow-2xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Create New Task</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <TaskForm
                onClose={() => setIsModalOpen(false)}
                onTaskCreated={handleTaskCreated}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {isNewColumnModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-xl p-6 w-96 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">New Column</h2>
              <button
                onClick={() => setIsNewColumnModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Column Name</label>
                <input
                  type="text"
                  value={newColumnName}
                  onChange={(e) => setNewColumnName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300"
                  placeholder="e.g. Review Phase"
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setIsNewColumnModalOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddColumn}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Create Column
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default EmployeeDashboard;