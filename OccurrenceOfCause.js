var occurrenceScore = '';
var occurrenceScore = parseInt(Item.fieldValue("Revised Occurrence"));
var scoreValue = textValueFromOccurrenceScore(occurrenceScore);

function textValueFromOccurrenceScore(customerEffect) {
    var result = '';

    switch (customerEffect) {
        case 10:
            result = 'New technology/new design with no history';
            break;
        
        case 9:
            result = 'Failure inevitable w/new design, new application, or change in duty cycle/operating condition';
            break;

        case 8:
            result = 'Failure is likely with new design, new application, or change in duty cycle/operating condition'
            break;
        
        case 7:
            result = 'Failure is uncertain with new design, new application, or change in duty cycle/operating condition'
            break;
        
        case 6:
            result = 'Frequent failures associated with similar designs or in design simulation and testing.'
            break;
        
        case 5:
            result = 'Occasional failures associated with similar designs or in design simulation and testing.'
            break;
        
        case 4:
            result = 'Isolated failures associated with similar designs or in design simulation and testing.'
            break;

        case 3:
            result = 'Only isolated failures associated with almost identical designs or in design simulation and testing.'
            break;

        case 2:
            result = 'No observed failures associated with almost identical designs or in design simulation and testing.'
            break;

        case 1:
            result = 'Failure is eliminated through preventative control.'
            break;

    }

    return result;
}

scoreValue;