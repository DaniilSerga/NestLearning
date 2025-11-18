import {IsString} from 'class-validator';

export class CreateActorDto {
	@IsString({message: 'Actor name must be in string format'})
	name: string;
}
