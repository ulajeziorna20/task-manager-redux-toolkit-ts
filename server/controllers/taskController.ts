const User = require('../../database/model/user_model.ts');
const Task = require('../../database/model/task_model.ts');
import { Request, Response, Application } from 'express';


module.exports = {

  addTask: async (req: Request, res: Response) => {
    const { task, id } = req.body as { task: string, id: string };


    console.log(req.body);


    try {
      if (!task) return res.status(400).send('please enter the task');

      if (task.length < 10) res.status(400).send('add minimum 10 char');

      const taskDetail = await new Task({
        task,
        cretedBy: id,
      });

      await taskDetail.save();

      return res.status(200).send(taskDetail);
    } catch (error) {

      return res.status(400).send('task addition failed');
    }

  },

  getAllTasks: async (req: Request, res: Response) => {
    const { id } = req.query as { id: string };
    try {
      let tasklist = await Task.find({ cretedBy: id });
      return res.status(200).send(tasklist);
    } catch (error: any) {
      return res.status(400).send(error);
    }
  },


  statusChange: async (req: Request, res: Response) => {
    const { id, string } = req.body as { id: string, string: string };

    try {
      let task = await Task.findById({ _id: id });

      if (string === 'right') {
        if (task.status === 'backlog') {
          task.status = 'todo';
          task.save();
          return res.send(task);
        } else if (task.status === 'todo') {
          task.status = 'doing';
          task.save();
          return res.send(task);
        } else if (task.status === 'doing') {
          task.status = 'done';
          task.save();
          return res.send(task);
        }
      } else {
        if (task.status === 'done') {
          task.status = 'doing';
          task.save();
          return res.send(task);
        } else if (task.status === 'doing') {
          task.status = 'todo';
          task.save();
          return res.send(task);
        } else if (task.status === 'todo') {
          task.status = 'backlog';
          task.save();
          return res.send(task);
        }
      }
    } catch (error) {
      return res.status(400).json(error)
    }
  },


  deleteTask: async (req: Request, res: Response) => {

    const { id } = req.params as { id: string };
    try {
      console.log('przeszło');
      let response = await Task.findByIdAndDelete(id);
      return res.status(200).send(response);
    } catch (error) {
      console.log(error);

      return res.status(400).send('deleteFailed');
    }
  }


}
