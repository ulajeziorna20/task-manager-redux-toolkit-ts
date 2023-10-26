const User = require('../../database/model/user_model.ts');
const Task = require('../../database/model/task_model.ts');
import { Request, Response, Application } from 'express';


module.exports = {

  addTask: async (req: Request, res: Response) => {
    const { task, id } = req.body as { task: string, id: string };

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

  }

}
