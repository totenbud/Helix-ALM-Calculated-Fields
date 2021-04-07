var severityScore = '';
var severityScore = parseInt(Item.fieldValue("Severity"));
var scoreValue = textValueFromSeverityScore(severityScore);

function textValueFromSeverityScore(customerEffect) {
    var result = '';

    switch (customerEffect) {
        case 10:
            result = 'Potential failure mode affects safe vehicle operation and/or involves noncompliance with government regulation WITHOUT adequate warning.';
            break;
        
        case 9:
            result = 'Potential failure mode affects safe vehicle operation and/or involves noncompliance with government regulation WITH adequate warning.';
            break;

        case 8:
            result = 'Loss of primary function (vehicle inoperable, does not affect safe vehicle operation).'
            break;
        
        case 7:
            result = 'Degradation of primary function (vehicle operable, but at a reduced level of performance).'
            break;
        
        case 6:
            result = 'Loss of secondary function (vehicle operable, but comfort/convenience item(s) inoperable).'
            break;
        
        case 5:
            result = 'Degradation of secondary function (vehicle operable, but comfort/convenience functions at a reduced level of performance).'
            break;
        
        case 4:
            result = 'Appearance or Audible Noise, vehicle operable, item does not conform and noticed by most customers (>75%).'
            break;

        case 3:
            result = 'Appearance or Audible Noise, vehicle operable, item does not conform and noticed by many customers (50%).'
            break;

        case 2:
            result = 'Appearance or Audible Noise, vehicle operable, item does not conform and noticed by discriminating customers (<25%).'
            break;

        case 1:
            result = 'No discernible effect.'
            break;

    }

    return result;
}

scoreValue;