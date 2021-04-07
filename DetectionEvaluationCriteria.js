var detectionScore = '';
var detectionScore = parseInt(Item.fieldValue("Revised Detection"));
var scoreValue = textValueFromDetectionScore(detectionScore);

function textValueFromDetectionScore(customerEffect) {
    var result = '';

    switch (customerEffect) {
        case 10:
            result = 'No current design control; Cannot detect or is not analyzed';
            break;
        
        case 9:
            result = 'Design analysis/detection controls have a weak detection capability; Virtual Analysis (e.g. CAE, FEA) IS NOT correlated to expected actual operating conditions.';
            break;

        case 8:
            result = 'Product verification/validation after design freeze and prior to launch with pass/fail testing (component/system/vehicle testing with acceptance criteria such as ride and handling, shipping evaluation, etc.)'
            break;
        
        case 7:
            result = 'Product verification/validation after design freeze and prior to launch with test to failure testing (component/system/vehicle testing until failure occurs, testing of system interactions, etc.)'
            break;
        
        case 6:
            result = 'Product verification/validation after design freeze and prior to launch with degradation testing (component/system/vehicle testing after durability test such as function check).'
            break;
        
        case 5:
            result = 'Product developmental testing (reliability or verification testing) prior to design freeze using pass/fail testing (e.g. acceptance criteria for performance, function checks).'
            break;
        
        case 4:
            result = 'Product developmental testing (reliability or verification testing) prior to design freeze using test to failure (e.g. until leaks, yields, cracks). Critical design intent part parameters are represented in test parts.'
            break;

        case 3:
            result = 'Product developmental testing prior to design freeze using degradation testing (e.g. data trends, before/after values). Virtually all design intent part parameters are represented in test parts.'
            break

        case 2:
            result = 'Design analysis and testing have a very strong detection capability. Virtual analysis and/or test (e.g., CAE, FEA, etc.) is very highly correlated with actual or expected operating conditions and is sufficient for design verification.'
            break;

        case 1:
            result = 'Failure cause or failure mode cannot occur because it is fully prevented through design solutions (e.g., proven design standard, best practice or common material, etc.).'
            break;

    }

    return result;
}

scoreValue;