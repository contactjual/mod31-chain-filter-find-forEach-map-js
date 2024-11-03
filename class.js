class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subjuct = subject;
    }
    lecture() {
        console.log('sir is teaching Math');
    };
}
const tapan = new Teacher('Tapon sir', 'Physics');
console.log(tapan);

const rashid = new Teacher('Rashid sir', 'English');
console.log(rashid);