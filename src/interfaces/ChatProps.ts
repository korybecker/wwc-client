import IChat from "./IChat";

export default interface ChatProps {
  createdAtDate: Date;
  username: string;
  key: number;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}
