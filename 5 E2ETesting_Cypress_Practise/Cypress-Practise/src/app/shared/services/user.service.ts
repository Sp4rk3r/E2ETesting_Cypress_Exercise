import { Injectable } from '@angular/core';

import { UserInterface } from '../interfaces/user.interface';

@Injectable()
export class UserService {
  users: UserInterface[] = [];
  addUser(user: UserInterface): void {
    this.users = [...this.users, user];
  }

  removeUser(userId: number): void {
    const updatedUsers = this.users.filter((user) => userId != user.id);
    this.users = updatedUsers;
  }

  // ==============
  /// RXJS Testing
  // ==============
  //users$ = new BehaviorSubject<UserInterface[]>([]);
  // addUser(user: UserInterface): void {
  //   this.users$.next([...this.users$.getValue(), user]);
  // }

  // removeUser(userId: number): void {
  //   const updatedUsers = this.users$
  //     .getValue()
  //     .filter((user) => userId != user.id);
  //   this.users$.next(updatedUsers);
  // }
}
