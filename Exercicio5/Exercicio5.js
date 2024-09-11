function ValidatePlateRegex(plate) {
    let re = /^(?:[A-Z]{2}[-\s]\d{2}[-\s]\d{2}|[A-Z]{2}[-\s]\d{2}[-\s][A-Z]{2}|\d{2}[-\s]\d{2}[-\s][A-Z]{2}|\d{2}[-\s][A-Z]{2}[-\s]\d{2})$/;
    return re.test(plate); 
}

// valida comprimento da matrícula
function ValidateLength(plate) {
    return plate.length === 8;
}

// verifica separadores/espaçamentos
function ValidadeSpacings(plate) {
    if (plate[2] !== " " && plate[2] !== "-") {
        return false;
    }

    if (plate[5] !== " " && plate[5] !== "-") {
        return false;
    }

    return true;
}

// substitui " " por "-" por causa das funções seguintes
function ReplaceSpaces(plate) {
    let standardPlate = "";
    for (let i = 0; i < plate.length; i++) {
        if (plate[i] === " ") {
            standardPlate += "-";
        } else {
            standardPlate += plate[i];
        }
    }
    return standardPlate;
}

// separa por partes e verifica o número de partes
function ValidatePartsNumber(plate) {
    let parts = plate.split("-");
    return parts.length === 3 ? parts : null;
}

// verifica se cada parte tem 2 letras ou 2 números
function ValidadeParts(parts) {
    let letterParts = 0;
    let numberParts = 0;
    for (let i = 0; i < parts.length; i++) {
        let individualPart = parts[i];
        if (individualPart.length !== 2) {
            return false;
        }

        let isNumber = true;
        for (let i = 0; i < individualPart.length; i++) {
            if (individualPart[i] < '0' && individualPart[i] > '9') {
                isNumber = false;
                break;
            }
        }

        // se isNumber continuar a ser true...
        if (isNumber) {
            numberParts++;
        } else {
            letterParts++;
            // isto não vai falhar?
            for (let i = 0; i < individualPart.length; i++) {
                if (individualPart[i] < "A" && individualPart[i] > "Z") {
                    return false;
                }
            }
        }
    }
    // verifica se há 1 ou 2 partes compostas por letras
    return letterParts === 1 || letterParts === 2;
}

// validar se todas as outras validações estiverem ok
function ValidatePlate(plate) {
    if (!ValidateLength(plate)) {
        return false;
    }

    if (!ValidadeSpacings(plate)) {
        return false;
    }

    let standardPlate = ReplaceSpaces(plate);

    let parts = ValidatePartsNumber(standardPlate);
    if (parts === null) {
        return false;
    }

    return ValidadeParts(parts);
}
