import { UserEntity } from '../entities/user.entity.js';

export class UpdateUserUseCase {
	constructor(mockRepository, findUserByNameUseCase) {
		this.mockRepository = mockRepository;
		this.findUserByNameUseCase = findUserByNameUseCase;
	}
	execute(userUpdated, userName) {
		const userToUpdate = this.findUserByNameUseCase.execute(userName);
		if (!userToUpdate) {
			throw new Error('User not founded.');
		}
		const userModified = Object.assign(userToUpdate, userUpdated);
		const userValidated = new UserEntity(userModified);
		userValidated.validate();
		return this.mockRepository.updateUser(userValidated.getUser());
	}
}
