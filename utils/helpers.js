module.exports = {
    format_date: (date) => {
        // Format date as MM/DD/YYYY
        return date.toLocaleDateString();
    },
    format_text: (string) => {
        //Format text with Capitalisation for Title
        return string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    },
}