import { Request, Response } from "express";

import Queue from "../services/Queue";

export default class UserController {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    };

    await Queue.add("RegistrationMail", { user });
    await Queue.add("UserReport", { user });

    return res.json(user);
  }
}
