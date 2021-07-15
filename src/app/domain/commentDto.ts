import {UserDto} from "./userDto";

export interface CommentDto {
  id: number;
  body: string;
  creator: UserDto;
  date: Date;
}
