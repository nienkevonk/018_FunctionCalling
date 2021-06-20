// hey kiddo

const age = function (number) {
    if (number >= 18) {
        return "true";
    }
};

const adultcheck = function () {
    if (age(10)) {
        return "Hello there";
    } return "Hey kiddo";
};

console.log(adultcheck());

// VAT calculations exercise 1

const vatcalculation = function (baseprice, VATpercentage) {
    const price = baseprice * (1 + VATpercentage);
    console.log(price);
    return price;
};

const priceincludeVAT = function () {
    vatcalculation(40, 0.21);
    return vatcalculation;
};

priceincludeVAT();

// VAT calculations excercise 2

const vatcalculation = function (priceVATincluded, VATpercentage) {
    const VATamount = (priceVATincluded - (priceVATincluded / (1 + VATpercentage)));
    const baseprice = priceVATincluded - VATamount;
    const total = [VATamount, baseprice];
    return total;
};

const VATnumbers = function () {
    vatcalculation(1210, 0.09);
    return vatcalculation;
};

VATnumbers();





