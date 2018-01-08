export class Customer{
    constructor(
        public customerId?: Number,
        public customerName?: String
    ){

    }
    public getCustomerID() {
        return this.customerId;
    }

    public getCustomerName() {
        return this.customerName;
    }
}