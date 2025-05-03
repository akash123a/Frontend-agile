// // Description: This component is a Kanban board with drag-and-drop functionality for tasks, project management, and team member invitations. It uses React hooks for state management and Material-UI for UI components.



// import React, { useState, useCallback } from 'react';
// import { Hand as DragHandle, Plus, Settings2, Search, ChevronDown, X, FolderPlus } from 'lucide-react';
// import ProjectModal from './ProjectModal';
// import TaskForm from './TaskForm';

// import { LogOut } from 'lucide-react';

// import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Grid, Button, IconButton, MenuItem } from '@mui/material';
// import { Mail, Send, Close } from '@mui/icons-material';

// const Check = () => {
//   // State Management
//   const [currentUser] = useState({ role: 'admin' }); // Change to 'member' to test different roles

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
//     // Add any logout logic here (clear tokens, storage, etc.)
//     // For now, just redirect to login page
//     window.location.href = "/Employee-Login";
//   };

//   const [projects, setProjects] = useState([
//     {
//       id: 'tech-1',
//       name: 'Tech',
//       type: 'Software project',
//       methodology: 'scrum',
//       teamMembers: ['user@example.com'],
//       deadline: '2024-12-31'
//     }
//   ]);

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
//   const [isNewColumnModalOpen, setIsNewColumnModalOpen] = useState(false);
//   const [newColumnName, setNewColumnName] = useState('');
//   const [openInviteModal, setOpenInviteModal] = useState(false);
//   const [newInvite, setNewInvite] = useState({ email: '', role: 'Member' });
//   const [invitedMembers, setInvitedMembers] = useState([]);

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

//   // Project Management
//   const handleCreateProject = (projectData) => {
//     const newProject = {
//       id: `proj-${Math.floor(Math.random() * 1000)}`,
//       ...projectData
//     };
//     setProjects(prev => [...prev, newProject]);
//     setIsProjectModalOpen(false);
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

//   // Invite Management
//   const handleSendInvite = useCallback(async () => {
//     try {
//       const response = await fetch('http://localhost:8094/api/users/invite', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email: newInvite.email }),
//       });

//       if (response.ok) {
//         alert("Invitation sent!");
//         setInvitedMembers([...invitedMembers, newInvite]);
//         setOpenInviteModal(false);
//         setNewInvite({ email: '', role: 'Member' });
//       } else {
//         alert("Failed to send invite");
//       }
//     } catch (error) {
//       console.error("Invite error:", error);
//       alert("Something went wrong while sending the invite.");
//     }
//   }, [newInvite, invitedMembers]);

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-white border-r relative">
//         <div className="p-4">
//           <div className="flex items-center justify-between mb-6">
//             <div className="flex items-center space-x-2">
//               <img 
//                 src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=48&h=48&fit=crop"
//                 alt="Project"
//                 className="w-8 h-8 rounded"
//               />
//               <div>
//                 <h2 className="font-semibold">Add Projects</h2>
//                 <p className="text-sm text-gray-500">Manage projects</p>
//               </div>
//             </div>
//             <button
//               onClick={() => setIsProjectModalOpen(true)}
//               className="p-1.5 hover:bg-gray-100 rounded"
//             >
//               <FolderPlus className="w-5 h-5 text-gray-600" />
//             </button>
//           </div>

//           <nav>
//             <div className="space-y-1">
//               {projects.map(project => (
//                 <div key={project.id} className="mb-4">
//                   <div className="flex items-center px-2 py-2 text-sm bg-blue-50 text-blue-600 rounded">
//                     <span className="mr-2">📋</span>
//                     <div>
//                       <div className="font-medium">{project.name}</div>
//                       <div className="text-xs text-gray-500">{project.type}</div>
//                     </div>
//                   </div>
//                   <div className="ml-4 mt-2 space-y-1">
//                     <a href="#" className="flex items-center px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded">
//                       📊 Summary
//                     </a>
//                     <a href="#" className="flex items-center px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded">
//                       📅 Timeline
//                     </a>
//                     <a href="#" className="flex items-center px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded">
//                       📋 Board
//                     </a>
//                     <a href="#" className="flex items-center px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded">
//                       📆 Calendar
//                     </a>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </nav>
//         </div>

              
//         <div className="w-64 bg-white border-r relative">
//   <div className="p-4">
//     {/* existing content here (project list, navigation, etc.) */}
//   </div>

//   {/* 👇 Add this outside the above div, still inside the sidebar */}
//   <div className="absolute bottom-0 left-0 w-full p-4 border-t bg-white">
//     <button
//       onClick={handleLogout}
//       className="w-full flex items-center justify-center gap-2 py-2 px-4 text-sm text-red-600 hover:bg-gray-100 rounded"
//     >
//       <LogOut className="w-4 h-4" />
//       Logout
//     </button>
//   </div>
// </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 overflow-hidden relative">
//         {/* Header */}
//         <div className="bg-white border-b p-4">
//           <div className="flex items-center justify-between">
//             <h1 className="text-4xl font-semibold">Admin board</h1>
//             <div className="flex items-center space-x-4">
//               <button onClick={() => setOpenInviteModal(true)} className="p-2 hover:bg-gray-100 rounded">
//                 <Mail className="w-5 h-5 text-gray-600" />
//               </button>
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
//   onClick={() => setIsModalOpen(false)} 
//   className="bg-rose-500 text-white p-1.5 rounded-full hover:bg-rose-600 transition-colors
// "
// >
//   <X className="w-5 h-5" />
// </button>
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

//       <Dialog open={openInviteModal} onClose={() => setOpenInviteModal(false)}>
//         <DialogTitle>
//           <Mail sx={{ mr: 1 }} /> Invite Team Members
//           <IconButton sx={{ position: 'absolute', right: 8, top: 8 }} onClick={() => setOpenInviteModal(false)}>
//             <Close />
//           </IconButton>
//         </DialogTitle>
//         <DialogContent dividers>
//           <Grid container spacing={3}>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Email"
//                 type="email"
//                 value={newInvite.email}
//                 onChange={(e) => setNewInvite({ ...newInvite, email: e.target.value })}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 select
//                 fullWidth
//                 label="Role"
//                 value={newInvite.role}
//                 onChange={(e) => setNewInvite({ ...newInvite, role: e.target.value })}
//               >
//                 {['Member', 'Admin', 'Viewer'].map(role => (
//                   <MenuItem key={role} value={role}>{role}</MenuItem>
//                 ))}
//               </TextField>
//             </Grid>
//           </Grid>
//         </DialogContent>
//         <DialogActions>        
//           <Button onClick={() => setOpenInviteModal(false)}>Cancel</Button>
//           <Button variant="contained" onClick={handleSendInvite} startIcon={<Send />}>
//             Send Invite
//           </Button>
//         </DialogActions>
//       </Dialog>

      

//       {isProjectModalOpen && <ProjectModal onClose={() => setIsProjectModalOpen(false)} onSave={handleCreateProject} />}
//     </div>
//   );
// };

// export default Check;




































// // Description: This component is a Kanban board with drag-and-drop functionality for tasks, project management, and team member invitations. It uses React hooks for state management and Material-UI for UI components.



// import React, { useState, useCallback } from 'react';
// import { Hand as DragHandle, Plus, Settings2, Search, ChevronDown, X, FolderPlus } from 'lucide-react';
// import ProjectModal from './ProjectModal';
// import TaskForm from './TaskForm';

// import { LogOut } from 'lucide-react';

// import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Grid, Button, IconButton, MenuItem } from '@mui/material';
// import { Mail, Send, Close } from '@mui/icons-material';

import React, { useState, useCallback } from 'react';
import { Hand as DragHandle, Plus, Settings2, Search, ChevronDown, X, FolderPlus } from 'lucide-react';
import ProjectModal from './ProjectModal';
import TaskForm from './TaskForm';
import { LogOut } from 'lucide-react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Grid, Button, IconButton, MenuItem } from '@mui/material';
import { Mail, Send, Close } from '@mui/icons-material';



const Check = () => {
  // State Management
  const [currentUser] = useState({ role: 'admin' }); // Change to 'member' to test different roles

  const [columns, setColumns] = useState([
    {
      id: 'todo',
      title: 'TO DO',
      tasks: [
        { id: 'MBA-5', title: '(Sample) Two-Factor Authentication Setup', tag: 'USER AUTHENTICATION', priority: 'high' },
        { id: 'MBA-8', title: '(Sample) Password Recovery Implementation', tag: 'USER AUTHENTICATION', priority: 'medium' }
      ]
    },
    {
      id: 'progress',
      title: 'IN PROGRESS',
      tasks: [
        { id: 'MBA-7', title: 'kunan', tag: '', priority: 'medium' },
        { id: 'MBA-6', title: '(Sample) Implement Biometric Login', tag: 'USER AUTHENTICATION', priority: 'high' }
      ]
    },
    {
      id: 'done',
      title: 'DONE',
      tasks: [
        { id: 'MBA-3', title: '(Sample) Initiate Fund Transfer', tag: 'TRANSACTION MANAGEMENT', priority: 'low' },
        { id: 'MBA-4', title: '(Sample) View Transaction History', tag: 'TRANSACTION MANAGEMENT', priority: 'medium' }
      ]
    }
  ]);

  const handleLogout = () => {
    // Add any logout logic here (clear tokens, storage, etc.)
    // For now, just redirect to login page
    window.location.href = "/Employee-Login";
  };

  const [projects, setProjects] = useState([
    {
      id: 'tech-1',
      name: 'Tech',
      type: 'Software project',
      methodology: 'scrum',
      teamMembers: ['user@example.com'],
      deadline: '2024-12-31'
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isNewColumnModalOpen, setIsNewColumnModalOpen] = useState(false);
  const [newColumnName, setNewColumnName] = useState('');
  const [openInviteModal, setOpenInviteModal] = useState(false);
  const [newInvite, setNewInvite] = useState({ email: '', role: 'Member' });
  const [invitedMembers, setInvitedMembers] = useState([]);

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
    if (window.confirm('Are you sure you want to delete this column and all its tasks?')) {
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

    setColumns(prev => 
      prev.map(col => {
        if (col.id === sourceColumnId) return { ...col, tasks: col.tasks.filter(t => t.id !== task.id) };
        if (col.id === targetColumnId) return { ...col, tasks: [...col.tasks, task] };
        return col;
      })
    );
  };

  // Project Management
  const handleCreateProject = (projectData) => {
    const newProject = {
      id: `proj-${Math.floor(Math.random() * 1000)}`,
      ...projectData
    };
    setProjects(prev => [...prev, newProject]);
    setIsProjectModalOpen(false);
  };

  // Task Management
  const handleTaskCreated = (taskData) => {
    const newTask = {
      id: `MBA-${Math.floor(Math.random() * 1000)}`,
      title: taskData.title,
      description: taskData.description,
      priority: 'medium',
      tag: '',
      assigneeName: taskData.assigneeName
    };

    setColumns(prev => 
      prev.map(col => 
        col.id === 'todo' ? { ...col, tasks: [...col.tasks, newTask] } : col
      )
    );
  };

  // Invite Management
  const handleSendInvite = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:8094/api/users/invite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newInvite.email }),
      });

      if (response.ok) {
        alert("Invitation sent!");
        setInvitedMembers([...invitedMembers, newInvite]);
        setOpenInviteModal(false);
        setNewInvite({ email: '', role: 'Member' });
      } else {
        alert("Failed to send invite");
      }
    } catch (error) {
      console.error("Invite error:", error);
      alert("Something went wrong while sending the invite.");
    }
  }, [newInvite, invitedMembers]);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r relative">
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <img 
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=48&h=48&fit=crop"
                alt="Project"
                className="w-8 h-8 rounded"
              />
              <div>
                <h2 className="font-semibold">Add Projects</h2>
                <p className="text-sm text-gray-500">Manage projects</p>
              </div>
            </div>
            <button
              onClick={() => setIsProjectModalOpen(true)}
              className="p-1.5 hover:bg-gray-100 rounded"
            >
              <FolderPlus className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <nav>
            <div className="space-y-1">
              {projects.map(project => (
                <div key={project.id} className="mb-4">
                  <div className="flex items-center px-2 py-2 text-sm bg-blue-50 text-blue-600 rounded">
                    <span className="mr-2">📋</span>
                    <div>
                      <div className="font-medium">{project.name}</div>
                      <div className="text-xs text-gray-500">{project.type}</div>
                    </div>
                  </div>
                  <div className="ml-4 mt-2 space-y-1">
                    <a href="#" className="flex items-center px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded">
                      📊 Summary
                    </a>
                    <a href="#" className="flex items-center px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded">
                      📅 Timeline
                    </a>
                    <a href="#" className="flex items-center px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded">
                      📋 Board
                    </a>
                    <a href="#" className="flex items-center px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded">
                      📆 Calendar
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </nav>
        </div>

              
        <div className="w-64 bg-white border-r relative">
  <div className="p-4">
    {/* existing content here (project list, navigation, etc.) */}
  </div>

  {/* 👇 Add this outside the above div, still inside the sidebar */}
  <div className="absolute bottom-0 left-0 w-full p-4 border-t bg-white">
    <button
      onClick={handleLogout}
      className="w-full flex items-center justify-center gap-2 py-2 px-4 text-sm text-red-600 hover:bg-gray-100 rounded"
    >
      <LogOut className="w-4 h-4" />
      Logout
    </button>
  </div>
</div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden relative">
        {/* Header */}
        <div className="bg-white border-b p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-semibold">Admin board</h1>
            <div className="flex items-center space-x-4">
              <button onClick={() => setOpenInviteModal(true)} className="p-2 hover:bg-gray-100 rounded">
                <Mail className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
                <Settings2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>




          <div className="flex items-center space-x-4 mt-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-9 pr-4 py-2 border rounded-md w-64"
              />
            </div>
            <button className="flex items-center space-x-1 px-3 py-2 border rounded-md">
              <span>Epic</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Board */}
        <div className="flex p-6 space-x-6 overflow-x-auto h-[calc(100vh-160px)]">
          {columns.map(column => (
            <div
              key={column.id}
              className="bg-gray-50 rounded-lg p-4 w-80 flex-shrink-0 relative group"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, column.id)}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">{column.title}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-500">{column.tasks.length}</span>
                  <button
                    onClick={() => handleRemoveColumn(column.id)}
                    className="text-gray-400 hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100"
                    title="Delete column"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {column.tasks.map(task => (
                  <div
                    key={task.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, task, column.id)}
                    className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 cursor-move"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm text-blue-600">{task.id}</span>
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            task.priority === 'high' ? 'bg-red-100 text-red-700' :
                            task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            {task.priority}
                          </span>
                        </div>
                        <p className="text-sm">{task.title}</p>
                        {task.tag && (
                          <span className="inline-block mt-2 px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded">
                            {task.tag}
                          </span>
                        )}
                        {task.assigneeName && (
                          <div className="mt-2 text-xs text-gray-500">
                            Assignee: {task.assigneeName}
                          </div>
                        )}
                      </div>
                      <DragHandle className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="w-80 flex-shrink-0">
            <button
              onClick={() => setIsNewColumnModalOpen(true)}
              className="w-full h-full bg-gray-100 hover:bg-gray-200 rounded-lg p-4 flex items-center justify-center transition-colors"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Column
            </button>
          </div>
        </div>

        {/* Floating Action Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="fixed bottom-8 right-8 w-14 h-14 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-110"
        >
          <Plus className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Modals */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-[500px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Create Task</h2>
              <button 
  onClick={() => setIsModalOpen(false)} 
  className="bg-rose-500 text-white p-1.5 rounded-full hover:bg-rose-600 transition-colors
"
>
  <X className="w-5 h-5" />
</button>
            </div>
            <TaskForm 
              onClose={() => setIsModalOpen(false)}
              onTaskCreated={handleTaskCreated}
            />
          </div>
        </div>
      )}

      {isNewColumnModalOpen && (
        <div className="fixed inset-0 bg-gray-200 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Create New Column</h2>
              <button onClick={() => setIsNewColumnModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Column Name</label>
                <input
                  type="text"
                  value={newColumnName}
                  onChange={(e) => setNewColumnName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter column name"
                />
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                <button onClick={() => setIsNewColumnModalOpen(false)} className="px-4 py-2 border rounded-md hover:bg-gray-50">
                  Cancel
                </button>
                <button onClick={handleAddColumn} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Create Column
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Dialog open={openInviteModal} onClose={() => setOpenInviteModal(false)}>
        <DialogTitle>
          <Mail sx={{ mr: 1 }} /> Invite Team Members
          <IconButton sx={{ position: 'absolute', right: 8, top: 8 }} onClick={() => setOpenInviteModal(false)}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={newInvite.email}
                onChange={(e) => setNewInvite({ ...newInvite, email: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                fullWidth
                label="Role"
                value={newInvite.role}
                onChange={(e) => setNewInvite({ ...newInvite, role: e.target.value })}
              >
                {['Member', 'Admin', 'Viewer'].map(role => (
                  <MenuItem key={role} value={role}>{role}</MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>        
          <Button onClick={() => setOpenInviteModal(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSendInvite} startIcon={<Send />}>
            Send Invite
          </Button>
        </DialogActions>
      </Dialog>

      

      {isProjectModalOpen && <ProjectModal onClose={() => setIsProjectModalOpen(false)} onSave={handleCreateProject} />}
    </div>
  );
};

export default Check;




































