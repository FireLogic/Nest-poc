import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { getModelToken } from '@nestjs/mongoose';
import { Task } from './dto/task.dto';
import {Model} from 'mongoose';

describe('TasksService', () => {
    let service: TasksService;
    let model: Model<Task>;

    // Mock de las funciones de Mongoose
    const mockRepository = {
        find: jest.fn(),
        findById: jest.fn(),
        create: jest.fn(),
        findByIdAndUpdate: jest.fn(),
        findByIdAndDelete: jest.fn(),
        save: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                TasksService,
                {
                    provide: getModelToken(Task.name),
                    useValue: mockRepository,
                },
            ],
        }).compile();

        service = module.get<TasksService>(TasksService);
        model = module.get<Model<Task>>(getModelToken(Task.name));
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('getAllTasks', () => {
        it('should return an array of tasks', async () => {
            jest.spyOn(model, 'find').mockResolvedValueOnce([]);
            expect(await service.getAllTasks()).toEqual([]);
        });
    });

    describe('create', () => {
        it('should create a new task', async () => {
            const newTask = { title: 'Test Task', description: 'Test Description' };
            const poto = new model(newTask)
            jest.spyOn(model, 'create').mockRejectedValueOnce(poto);
            expect(await service.create(newTask)).toEqual(newTask);
        });
    });



    describe('delete', () => {
        it('should delete an existing task', async () => {
            const newTask = { title: 'Test Task', description: 'Test Description' };
            //jest.spyOn(model, 'findByIdAndDelete').mockImplementationOnce(() => Promise.resolve(newTask));
            expect(await service.create(newTask)).toEqual(newTask);
        });
    });


    describe('update', () => {
        it('should update an already created task', async () => {
            const newTask = { title: 'Test Task', description: 'Test Description' };
            //jest.spyOn(model, 'create').mockImplementationOnce(() => Promise.resolve(newTask));
            expect(await service.create(newTask)).toEqual(newTask);
        });
    });










// Haz las otras
});
