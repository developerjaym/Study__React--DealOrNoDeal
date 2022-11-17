const numberFormatter = new Intl.NumberFormat('en-US', { maximumSignificantDigits: 11 });
export default function format(number){
    return numberFormatter.format(number);
}