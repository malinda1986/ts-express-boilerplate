import { Service } from "typedi";
import { IUserDTO } from "../../../lib/dto";

@Service()
export default class UserService {
  public async processString(data: string): Promise<IUserDTO> {
    return {
      id: "malinda",
      name: "malinda",
    };
  }
}
