export class FindUserByNameUseCase {
	constructor(mockRepository) {
		this.mockRepository = mockRepository;
	}
	execute(userName) {
		return this.mockRepository.findByName(userName);
	}
}
