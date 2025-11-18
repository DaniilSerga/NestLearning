import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {ActorEntity} from './entities/actor.entity';
import {Repository} from 'typeorm';
import {CreateActorDto} from './dto/create-actor.dto';

@Injectable()
export class ActorService {
	constructor(
		@InjectRepository(ActorEntity)
		private readonly actorRepository: Repository<ActorEntity>,
	) {}

	async getAll(): Promise<ActorEntity[]> {
		return await this.actorRepository.find();
	}

	async getById(id: string): Promise<ActorEntity> {
		const actor = await this.actorRepository.findOneBy({id});

		if (!actor) {
			throw new NotFoundException('The actor was not found');
		}

		return actor;
	}

	async create(dto: CreateActorDto): Promise<ActorEntity> {
		const {name} = dto;

		const actor = this.actorRepository.create({name});

		return await this.actorRepository.save(actor);
	}

	async update(id: string, dto: CreateActorDto): Promise<ActorEntity> {
		const actor = await this.getById(id);

		Object.assign(actor, dto);

		await this.actorRepository.save(actor);

		return actor;
	}

	async delete(id: string): Promise<string> {
		const actor = await this.getById(id);

		await this.actorRepository.remove(actor);

		return actor.id;
	}
}
