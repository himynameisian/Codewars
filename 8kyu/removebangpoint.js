/**Write function RemoveExclamationMarks which removes all exclamation marks from a given string. */
function removeExclamationMarks(s) {
    s = s.split('!').join('')
    return s;
  }