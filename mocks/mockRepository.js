//findAll, deletedUser, create, findByName
import { mocks } from '../mocks/mocks.js';
export class MockRepository {
	findAll() {
		mocks.forEach((user) => {
			return user;
		});
	}
	deletedUser(userName) {
		const userDeleted = {};
		mocks.forEach((user, index) => {
			if (user.userName == userName) {
				mocks.splice(index, 1);
				userDeleted = user;
			}
		});
		return userDeleted;
	}
	create(user) {
		mocks.push(user);
		return user;
	}
	updateUser(userUpdate) {
		mocks.forEach((user, index) => {
			if (userUpdate.userName == user.userName) {
				mocks.splice(index, 1, userUpdate);
			}
		});
		return userUpdate;
	}
	findByName(userName) {
		const userFinded = {};
		mocks.forEach((user) => {
			if (user.userName == userName) {
				userFinded = user;
			}
		});
		return userFinded;
	}
}
