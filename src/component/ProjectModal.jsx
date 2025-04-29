// import React, { useState } from 'react';
// import { X } from 'lucide-react';

// const ProjectModal = ({ onClose, onSave }) => {
//   const [project, setProject] = useState({
//     name: '',
//     description: '',
//     methodology: 'scrum',
//     deadline: '',
//     teamMembers: '',
//     objectives: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(project);
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg p-6 w-[600px] max-h-[90vh] overflow-y-auto">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">Create New Project</h2>
//           <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//             <X className="w-5 h-5" />
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Project Name *
//             </label>
//             <input
//               type="text"
//               required
//               value={project.name}
//               onChange={(e) => setProject({ ...project, name: e.target.value })}
//               className="w-full px-3 py-2 border rounded-md"
//               placeholder="Enter project name"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Description
//             </label>
//             <textarea
//               value={project.description}
//               onChange={(e) => setProject({ ...project, description: e.target.value })}
//               className="w-full px-3 py-2 border rounded-md"
//               rows="3"
//               placeholder="Enter project description"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Project Methodology
//             </label>
//             <select
//               value={project.methodology}
//               onChange={(e) => setProject({ ...project, methodology: e.target.value })}
//               className="w-full px-3 py-2 border rounded-md"
//             >
//               <option value="scrum">Scrum</option>
//               <option value="kanban">Kanban</option>
//               <option value="hybrid">Hybrid</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Deadline
//             </label>
//             <input
//               type="date"
//               value={project.deadline}
//               onChange={(e) => setProject({ ...project, deadline: e.target.value })}
//               className="w-full px-3 py-2 border rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Team Members (comma-separated emails)
//             </label>
//             <input
//               type="text"
//               value={project.teamMembers}
//               onChange={(e) => setProject({ ...project, teamMembers: e.target.value })}
//               className="w-full px-3 py-2 border rounded-md"
//               placeholder="member1@example.com, member2@example.com"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Project Objectives
//             </label>
//             <textarea
//               value={project.objectives}
//               onChange={(e) => setProject({ ...project, objectives: e.target.value })}
//               className="w-full px-3 py-2 border rounded-md"
//               rows="3"
//               placeholder="Enter project objectives"
//             />
//           </div>

//           <div className="flex justify-end space-x-3 mt-6">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 border rounded-md hover:bg-gray-50"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//             >
//               Create Project
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ProjectModal;

















import React, { useState } from 'react';
import { X } from 'lucide-react';

const ProjectModal = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    methodology: 'scrum',
    deadline: '',
    organisationId: '',
    usernames: [''],
    objectives: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUsernamesChange = (e, index) => {
    const newUsernames = [...formData.usernames];
    newUsernames[index] = e.target.value;
    setFormData({ ...formData, usernames: newUsernames });
  };

  const handleAddUsername = () => {
    setFormData({ ...formData, usernames: [...formData.usernames, ''] });
  };

  const handleRemoveUsername = (index) => {
    const newUsernames = formData.usernames.filter((_, i) => i !== index);
    setFormData({ ...formData, usernames: newUsernames });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8094/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.text();

      if (response.ok) {
        alert('Project created successfully!');
        onSave(formData);
        onClose(); // Close modal after success
      } else {
        alert('Error: ' + result);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while creating the project.');
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-white bg-opacity-80 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl shadow-2xl p-8 w-[600px] max-h-[90vh] overflow-y-auto border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Create New Project</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <X className="w-6 h-6" />
        </button>
      </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Project Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter project name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter project description"
              rows="3"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Organisation ID *</label>
            <input
              type="text"
              name="organisationId"
              value={formData.organisationId}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter organisation ID"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Project Methodology</label>
            <select
              name="methodology"
              value={formData.methodology}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="scrum">Scrum</option>
              <option value="kanban">Kanban</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Deadline</label>
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Project Objectives</label>
            <textarea
              name="objectives"
              value={formData.objectives}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              rows="3"
              placeholder="Enter project objectives"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Team Members (Usernames)</label>
            {formData.usernames.map((username, index) => (
              <div key={index} className="flex space-x-2 mb-2">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => handleUsernamesChange(e, index)}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder={`Member ${index + 1}`}
                  required
                />
                {formData.usernames.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveUsername(index)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddUsername}
              className="mt-1 text-sm text-blue-600 hover:underline"
            >
              + Add another member
            </button>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectModal;
