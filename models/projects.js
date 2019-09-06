const mongoose = require('mongoose');

const projectsSchema = new mongoose.Schema({
  pName: {
    type: String,
    required: true
  },
  pClient: {
    type: String,
    required: true
  },
  employees: [
   {
     eId: mongoose.Types.ObjectId,
     eName: String,
     eTitle: String,
     level: Array
   }
 ]
});

const Projects = mongoose.model('projects', projectsSchema);

module.exports =  Projects;