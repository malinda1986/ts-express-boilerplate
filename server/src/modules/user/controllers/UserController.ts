import {
  JsonController,
  Post,
  Body,
} from "routing-controllers";
import { Container } from "typedi";
import Joi from "joi";
import { IUserService } from "../../../lib/interfaces";

import UserService from "../services/UserService";
import Http from "../../../common/response";

@JsonController()
export class UserController {
  private userService: IUserService;

  constructor() {
    this.userService = Container.get(UserService);
  }

  @Post("")
  async create(@Body() str: string) {
    try {
      const schema = Joi.object({
        str: Joi.string().required(),
      });
      await schema.validateAsync({str});

      const registerResponse = await this.userService.processString(str);
      return Http.createResponse(registerResponse, 201);
    } catch (e) {
      return {
        success: false,
        message: e.message,
      };
    }
  }
}
