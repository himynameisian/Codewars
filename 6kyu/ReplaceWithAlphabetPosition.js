/*Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.*/

function alphabetPosition(text) {
    const correction = {
        'A': '1',
        'B': '2',
        'C': '3',
        'D': '4',
        'E': '5',
        'F': '6',
        'G': '7',
        'H': '8',
        'I': '9',
        'J': '10',
        'K': '11',
        'L': '12',
        'M': '13',
        'N': '14',
        'O': '15',
        'P': '16',
        'Q': '17',
        'R': '18',
        'S': '19',
        'T': '20',
        'U': '21',
        'V': '22',
        'W': '23',
        'X': '24',
        'Y': '25',
        'Z': '26',
    
      };
      return text.toUpperCase().replace(/[^\w\s]/g,'').replace(/[0-9]/g,'').replace(/[^0-9a-zA-Z]/g,'').split('').map((char) => correction.hasOwnProperty(char) ? correction[char] : char).join(' ')
}
