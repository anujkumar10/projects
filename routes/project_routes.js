const mongoose = require('mongoose');

const Project = require('../models/projects');
const publishToQueue = require('../services/MQService');

module.exports = app => {
  app.get('/getAllProjects', async (req, res) => {
    const projects = await Project.find({});
    const queueName = 'abc2';
    console.log('projects are', projects);
    await publishToQueue(queueName, JSON.stringify(projects));

    res.send(projects);
  });

  app.post('/addUpdateProject', async (req, res) => {
    const query = {pName: req.body.pName};
    const project = await Project.findOneAndUpdate(query, req.body, {upsert: true});
    
    res.send({success: true});
  });

  app.get('/deleteProject/:projectId', async (req, res) => {
    const {projectId} = req.params;
    const project = await Project({_id: projectId}).remove();

    res.send(project);
  });

} 