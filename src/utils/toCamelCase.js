export const toCamelCase = (word) => {
    if (!word) return '';  // Handle empty input  
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}