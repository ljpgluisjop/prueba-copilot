function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
//function para obtener la fecha de mañana
function getTomorrow() {
    var today = new Date();
    var tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
}