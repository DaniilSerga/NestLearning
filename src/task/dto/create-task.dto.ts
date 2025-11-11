import {
	IsArray,
	IsEnum,
	IsInt,
	IsNotEmpty,
	IsOptional,
	IsPositive,
	IsString,
	Length,
} from 'class-validator';

export enum TaskTag {
	WORK = 'work',
	STUDY = 'study',
	HOME = 'home',
}

export class CreateTaskDto {
	@IsString()
	@IsNotEmpty()
	@Length(2, 40)
	title: string;

	@IsString({message: 'Task description must be a string'})
	@IsOptional()
	description: string;

	@IsInt({message: 'Field must be a number'})
	@IsPositive({message: 'Value must be greater than 0'})
	@IsOptional()
	priority: number;

	@IsArray({message: 'Tags must be an array'})
	@IsEnum(TaskTag, {message: 'Restricted naming', each: true})
	@IsOptional()
	tags: TaskTag[];
}
