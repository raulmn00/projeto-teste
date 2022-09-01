import { UserEntity } from '../entities/user.entity.js';

export class CreateUserUseCase {
	constructor(mockRepository) {
		this.mockRepository = mockRepository;
	}
	execute(user) {
		const newUser = new UserEntity(user);
		newUser.validate();
		return this.mockRepository.create(newUser.getUser());
	}
}
