class Expense {
    constructor(title, amount, date) {
        this.id = Math.random()*1000;
        this.title = title;
        this.amount = amount;
        this.date = date;
    }
}

export default Expense;
