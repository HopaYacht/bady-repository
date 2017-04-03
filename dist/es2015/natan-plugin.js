export let NatanPlugin = class NatanPlugin {

    constructor() {
        this.firstName = "Netanel ";
        this.lastName = "Mrciano";
        this.people = [];
        this.editing = undefined;
    }

    get fullName() {

        return this.firstName + " " + this.lastName;
    }

    create() {
        this.people.push(this.fullName);
    }

    delete(index) {
        this.people.splice(index, 1);
    }

    edit(index) {
        this.editing = index;
        this.newValue = this.people[index];
    }

    save(index) {
        this.people[index] = this.newValue;
        this.editing = undefined;
    }

};