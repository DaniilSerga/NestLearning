import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {ActorService} from './actor.service';
import {CreateActorDto} from './dto/create-actor.dto';

@Controller('actors')
export class ActorController {
	constructor(private readonly actorService: ActorService) {}

	@Get()
	findAll() {
		return this.actorService.getAll();
	}

	@Get(':id')
	findById(@Param('id') id: string) {
		return this.actorService.getById(id);
	}

	@Post()
	create(@Body() dto: CreateActorDto) {
		return this.actorService.create(dto);
	}

	@Put(':id')
	update(@Param('id') id: string, @Body() dto: CreateActorDto) {
		return this.actorService.update(id, dto);
	}

	@Delete(':id')
	delete(@Param('id') id: string) {
		return this.actorService.delete(id);
	}
}
