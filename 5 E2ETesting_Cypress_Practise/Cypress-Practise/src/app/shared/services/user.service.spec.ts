import { TestBed } from '@angular/core/testing';

import { UserInterface } from '../interfaces/user.interface';
import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
    });
    userService = TestBed.inject(UserService);
  });

  it('create a service', () => {
    expect(userService).toBeTruthy();
  });
  describe('addUser', () => {
    it('Add a user', () => {
      let user: UserInterface = {
        id: 1,
        name: 'foo',
      };
      userService.addUser(user);
      expect(userService.users).toEqual([{ id: 1, name: 'foo' }]);
      expect(userService.users).toHaveLength(1);
    });
  });

  describe('removeUser', () => {
    it('It should remove a user', () => {
      userService.users = [{ id: 1, name: 'foo' }];
      userService.removeUser(1);

      expect(userService.users).toEqual([]);
      expect(userService.users).toHaveLength(0);
    });
  });
});

// ==============
/// RXJS Testing
// ==============
// describe('UserService', () => {
//   let userService: UserService;
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [UserService],
//     });
//     userService = TestBed.inject(UserService);
//   });

//   it('create a service', () => {
//     expect(userService).toBeTruthy();
//   });
//   describe('addUser', () => {
//     it('Add a user', () => {
//       let user: UserInterface = {
//         id: 1,
//         name: 'foo',
//       };
//       userService.addUser(user);
//       expect(userService.users$.getValue()).toEqual([{ id: 1, name: 'foo' }]);
//       expect(userService.users$.getValue()).toHaveLength(1);
//     });
//   });

//   describe('removeUser', () => {
//     it('It should remove a user', () => {
//       userService.users$.next([{ id: 1, name: 'foo' }]);
//       userService.removeUser(1);

//       expect(userService.users$.getValue()).toEqual([]);
//       expect(userService.users$.getValue()).toHaveLength(0);
//     });
//   });
// });
