import { UserStore } from './user.store';
import { PostStore } from './posts.store';

export const stores: any[] = [PostStore, UserStore];

export * from './user.store';
export * from './posts.store';
