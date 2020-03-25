export class Task {
    public taskName : string;
    public taskCreatedOn : Date;
    public isCompleted : boolean;

    constructor(name : string, taskCreatedOn : Date, isCompleted : boolean) {
        this.taskName = name;
        this.taskCreatedOn = taskCreatedOn;
        this.isCompleted = isCompleted;
    }
}