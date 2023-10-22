const User = require('../../database/model/user_model.ts');
const jwt = require('jsonwebtoken');
const validator = require('email-validator');

import { Request, Response, Application } from 'express';


module.exports = {

  signin: async (req: Request, res: Response) => {

    // zwróc uwage na to typowanie podczas destrukturyzacji odpowiedzi req
    let { email, password } = req.body as { email: String, password: String };
    try {
      let user = await User.findOne({ email});
      // console.log(user, req.body);
      if (!user) {


        // nie trzeba dopisywać tu juz zadnego typu
        return res.status(400).send('email does not exist');
      }

      user.comparePassword(password, (err: Error, match: Boolean) => {
        if (!match || err) {
          return res.status(400).send('password does not match');
        }

        let token = jwt.sign({ _id: user._id }, 'kljclsadflkdsjfklsdjfklsdjf', {
          expiresIn: '24h',
        });

        res.status(200).send({
          token,
          username: user.username,
          email: user.email,
          id: user._id,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        });
      });
    } catch (error) {
      return res.status(400).send('login failed');
    }
  },






  register: async (req: Request, res: Response) => {
    console.log(req.body, 'req');
    const { username, password, email } = req.body;
    try {
      if (!username) {
        return res.status(400).send('username is required');
      }

      if (!email) {
        return res.status(400).send('email is required');
      }
      if (!validator.validate(email)) {
        return res.status(400).send('enter valid email id');
      }
      if (!password || password.length < 6) {
        return res.status(400).send('enter valid password');
      }

      const userExist = await User.findOne({ email });
      if (userExist) {
        return res.status(400).send('email is taken');
      }

      const user = await new User({
        email,
        username,
        password,
      });

      await user.save();
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json('Error creating user');
    }
  }


}


