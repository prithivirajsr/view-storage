import { JsonPipe } from '@angular/common';
import { Component, QueryList, ViewChildren, ElementRef, AfterViewChecked, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewChecked {
    constructor(private renderer2: Renderer2) { }
    @ViewChildren("taskView") taskColor: QueryList<ElementRef>;
    taskList: Array<any> = [];
    showTask: Array<any>;

    storeValueLocal() {
        localStorage.setItem("taskArray", JSON.stringify(this.taskList));
    }

    storeValueSession() {
        sessionStorage.setItem("taskArray", JSON.stringify(this.taskList));
    }

    getValueLocal() {
        this.showTask = JSON.parse(localStorage.getItem("taskArray"));
        console.log("Data from local storage: " + this.showTask);
    }

    displayJob(taskReceive: string) {
        if (taskReceive) {
            this.taskList.push(taskReceive);
            alert("Task received on parent: " + taskReceive);
        }

    }
    ngAfterViewChecked() {
        this.taskColor.forEach(el => {
            console.log(el.nativeElement)
            this.renderer2.setStyle(el.nativeElement, 'color', 'red')
        })
    }


}