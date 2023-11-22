import { Injectable } from '@nestjs/common';
import {Task, TaskStatus } from './task.entity';
import {v4} from 'uuid';
import { updateClassDTO } from './dto/task.dto';
@Injectable()

export class TasksService {
    private tasks: Task[] = [
        {
            id: '1',
            title: 'first task',
            description: 'some task',
            status: TaskStatus.PENDING
        },
    ];
    getAllTasks() {
        return this.tasks;
    };
    
    createTask(title: string, description: string) {
        const task = {
            id: v4(),
            title,
            description,
            status: TaskStatus.PENDING,
        };
        this.tasks.push(task);

        return task;
    }
    updateTask(id: string, updateFields: updateClassDTO): Task {
        const task = this.getTaskById(id)
        const newTask = Object.assign(task, updateFields)
        this.tasks.map(task => task.id === id ? newTask: task)
        return newTask;


    }

    deleteTask(id: string){
        this.tasks = this.tasks.filter(task => task.id !== id )
    }

    getTaskById(id: string): Task{
        return this.tasks.find(task => task.id === id) 
        
    
    }

}
