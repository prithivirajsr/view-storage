import { Component, EventEmitter, Input, Output, ViewChild, ElementRef, OnChanges } from "@angular/core";

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnChanges {
    @Input("jobArr") displayArr: Array<any>;
    @Output("taskValueSend") displayJob = new EventEmitter<any>();
    taskValue: string = "";
    taskToSend: string = "";

    constructor() {

    }

    getJobValue() {
        this.taskToSend = this.taskValue;
        this.taskValue = "";
        console.log(this.taskToSend);
        this.displayJob.emit(this.taskToSend);
    }
    ngOnChanges() {
        console.log(this.displayArr);
    }

}