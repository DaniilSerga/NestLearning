import {IsBoolean, IsNotEmpty, IsString, Length} from 'class-validator';

export class UpdateTaskDto {
	@IsString({message: 'Task title must be a string'})
	@IsNotEmpty({message: 'Task title must not be empty'})
	@Length(2, 40, {message: ' The length must be from 2 to 40 symbols'})
	title: string;
	@IsBoolean({message: 'Value must be a boolean'})
	isCompleted: boolean;
}
