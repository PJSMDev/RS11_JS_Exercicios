let ano = 2024;

function IsDiv4(year) {
    return year % 4 === 0;
}

function IsDiv100(year) {
    return year % 100 === 0;
}

function IsDiv400(year) {
    return year % 400 === 0;
}

function IsLeapYear(year) {
    if (IsDiv400(year)) {
        return true;
    } else if (IsDiv100(year)) {
        return false;
    } else if (IsDiv4(year)) {
        return true;
    } else {
        return false;
    }
}

if (IsLeapYear(ano)) {
    console.log(ano + " é um ano bissexto.");
} else {
    console.log(ano + " não é um ano bissexto.");
}
