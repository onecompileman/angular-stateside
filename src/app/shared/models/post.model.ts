import { User } from './user/user.model';

export class Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  $$user: User;
}
