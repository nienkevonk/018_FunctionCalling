// hey kiddo

// const age = function (number) {
//     if (number >= 18) {
//         return "true";
//     }
// };

// const adultcheck = function (number) {
//     if (age(number)) {
//         return "Hello there";
//     } return "Hey kiddo";
// };

// console.log(adultcheck(20));
// console.log(adultcheck(17));

// VAT calculations exercise 1

// const vatcalculation = function (baseprice, VATpercentage) {
//     const price = baseprice * (VATpercentage / 100);
//     return price;
// };

// const priceincludeVAT = function (baseprice, VATpercentage) {
//     const VAT = vatcalculation(baseprice, VATpercentage)
//     return baseprice + VAT;
// };

// console.log(priceincludeVAT(1000, 21));

// // VAT calculations excercise 2

const calculateBasePrice = function (priceVATincluded, VATpercentage) {
    const baseprice = priceVATincluded / ((100 + VATpercentage) / 100);
    return baseprice;
};

const calculateBasePriceAndVAT = function (priceVATincluded, VATpercentage) {
    const basePrice = calculateBasePrice(priceVATincluded, VATpercentage);
    const VAT = priceVATincluded - basePrice;
    return [basePrice, VAT];
};

console.log(calculateBasePriceAndVAT(1210, 21));





