export class DeleteUserUseCase {
	constructor(mockRepository) {
		this.mockRepository = mockRepository;
	}
	execute(userName) {
		const deletedUser = this.mockRepository.deletedUser(userName);
		if (!deletedUser) {
			throw new Error('User not founded.');
		}
		return deletedUser;
	}
}
