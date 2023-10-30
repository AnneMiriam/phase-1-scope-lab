// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
};
// upperCaseCustomerName();

function setBestCustomer() {
    bestCustomer = 'not bob';
};

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
};

const leastFavoriteCustomer = 'andy';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'bobby';
    return leastFavoriteCustomer;
}