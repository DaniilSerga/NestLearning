import {
	IsArray,
	IsInt,
	IsNotEmpty,
	IsString,
	IsUUID,
	Max,
	Min,
} from 'class-validator';

export class MovieDto {
	@IsString({message: 'Movie title must be in string format'})
	@IsNotEmpty({message: 'Movie title string must not be empty'})
	title: string;

	@IsNotEmpty({message: 'Release string must not be empty'})
	@IsInt({message: 'Release year must be an integer'})
	@Min(1888)
	@Max(new Date().getFullYear())
	releaseYear: number;

	@IsString()
	imageUrl: string;

	@IsArray({message: 'Actors id must be an array'})
	@IsUUID('4', {each: true, message: 'Actors id must be in uuid format'})
	actorIds: string[];
}
