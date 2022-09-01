export class FindAllUsersUseCase {
	constructor(mockRepository) {
		this.mockRepository = mockRepository;
	}
	execute() {
		return this.mockRepository.findAll();
	}
}
