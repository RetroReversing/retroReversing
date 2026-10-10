function compareEntries(a, b, column, direction) {
  var result = 0;

  if (column === "offset") {
    result = a.offset - b.offset;
  } else if (column === "length") {
    result = a.length - b.length;
  } else {
    result = a.text.localeCompare(b.text);
    if (!result) result = a.offset - b.offset;
  }

  return direction === "asc" ? result : -result;
}

export function buildDisplayedList(rawStrings, hideDuplicates, sortColumn, sortDirection) {
  var list = rawStrings.slice();

  if (hideDuplicates) {
    var seen = new Set();
    list = list.filter(function (entry) {
      if (seen.has(entry.text)) return false;
      seen.add(entry.text);
      return true;
    });
  }

  list.sort(function (a, b) {
    return compareEntries(a, b, sortColumn, sortDirection);
  });

  return list;
}
