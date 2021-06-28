import {UserDto} from "./userDto";

export interface SessionMessageDto {
  id: number;
  sessionId: number;
  message: string;
  user: UserDto;
  date: Date;
}
