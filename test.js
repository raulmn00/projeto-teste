import { CreateUserUseCase } from './services/createUserUseCase.js';
import { mocks } from './mocks/mocks.js';
import { MockRepository } from './mocks/mockRepository.js';
import { UpdateUserUseCase } from './services/updateUserUseCase.js';
import { FindUserByNameUseCase } from './services/findUserByNameUseCase.js';
import { DeleteUserUseCase } from './services/deleteUseCase.js';

const mockRepository = new MockRepository();
const newUser = new CreateUserUseCase(mockRepository);
const findUserByNameUseCase = new FindUserByNameUseCase(mockRepository);
const deleteUser = new DeleteUserUseCase(mockRepository);

/*
const user = newUser.execute({
	name: 'Laura',
	idade: 16,
	email: 'laura@gmail.com',
	image: 'http://image.com',
});

console.log(user);

const updateUser = new UpdateUserUseCase(mockRepository, findUserByNameUseCase);

const usuario = updateUser.execute(
	{
		name: 'Felipe Augusto',
		idade: 28,
		email: 'lipe@gmail.com',
		image: 'http://image.com',
	},
	'Raul'
);
console.log(usuario);
console.log(mocks);*/

const user = newUser.execute({
	name: 'Felipe Augusto',
	idade: 16,
	email: 'laura@gmail.com',
	image: 'http://image.com',
});

console.log(user);
const deletedUser = new DeleteUserUseCase(mockRepository);
const felipao = deleteUser.execute({ name: 'Felipe Augusto' });
console.log(felipao);
console.log(mocks);
