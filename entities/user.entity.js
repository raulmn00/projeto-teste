import { randomUUID } from 'node:crypto';
export class UserEntity {
	constructor(user) {
		this.id = randomUUID();
		this.name = user.name;
		this.idade = user.idade;
		this.email = user.email;
		this.image = user.image;
	}
	validate() {
		if (!this.name || !this.idade || !this.email || !this.image) {
			throw new Error('User Invalid.');
		}
	}
	getUser() {
		return {
			id: this.id,
			name: this.name,
			idade: this.idade,
			email: this.email,
			image: this.image,
		};
	}
}
