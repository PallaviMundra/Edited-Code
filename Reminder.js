class Reminder {
    constructor(){

    }

    display(){
        this.greeting = createElement('h4');
        this.reminder1 = createInput("Reminder 1");
        this.greeting.html("Enter any important dates below!");
        this.greeting.position(displayWidth/2 - 73, displayHeight/2 - 390);
        console.log("reminder class");

        this.reminder1.position(displayWidth/2 - 20, displayHeight/2 - 340);
    }

    hide(){
        //this.greeting.hide();
        this.reminder1.hide();
    }

}