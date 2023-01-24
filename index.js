class Truck {
    constructor(truckName, truckNumber) {
        this.truckName = truckName;
        this.truckNumber = truckNumber;       
    }

    introduce()  {
    // const date = Date();
    // console.log(date);
    // console.log(this.truckName, this.truckNumber);
    }
} 

class Weight {
    constructor(truckGross, truckTare) {
        this.truckGross = truckGross;
        this.truckTare = truckTare;
        this.truckNet = this.truckGross - this.truckTare;
    }

    introduce()  {
    //  console.log(`${this.truckGross} ${this.truckTare} ${this.truckNet}`);
    }

}


class Menu {
    construction() {

    }

    start() {
        let selection = this.showMenu();
        while(selection != 0) {
            switch (selection) {
                case '1':
                    addWeight();
                    break;
                case '2':
                    viewWeight();
                    break;
                case '3':
                    deleteWeight();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMenu();
        }
    alert('Goodbye');
    }

    showMenu() {
        return prompt(`
        0) exit
        1) Add Weight
        2) View Weights
        3) Delete Weights
        `);
    }
}


function addWeight() {
    let name1 = prompt("Truck Name");
    let number = prompt("Truck Number");
    let gross = prompt("Gross Weight");
    let tare = prompt("Tare Weight");
    let truck1 = new Truck (name1, number);
    let weight1 = new Weight(gross,tare);
    truck1.introduce();
    weight1.introduce();
    var allWeights1 = [name1, number, gross, tare, (gross-tare)];
    allWeights.push(allWeights1);
}

function viewWeight() {
    let listWeights = " ";
    for (let i = 0; i < allWeights.length; i++) {
        listWeights += (i+1) + ') ' + allWeights[i] + '\n';
    }
    alert(listWeights);   
}

function deleteWeight() {
        let index = prompt('Enter number to delete weight; ');
            if(index > -1 && index < allWeights.length) {
            allWeights.splice((index - 1), 1); 
        }
}


let allWeights = [];
let menu = new Menu();
menu.start();





