import docsByFormat from "./generated/format-docs.json";

export function getFieldDoc(formatId, pathParts) {
  if (!formatId || !pathParts || !pathParts.length) return "";
  var docs = docsByFormat[formatId];
  if (!docs) return "";

  var path = pathParts.join(".");
  if (docs[path]) return docs[path];

  // Array items inherit docs from the parent field (e.g. sections.0.name -> sections.name)
  var normalized = path.replace(/\.\d+(?=\.|$)/g, "");
  if (normalized !== path && docs[normalized]) return docs[normalized];

  return "";
}

export function getFormatDocCount(formatId) {
  var docs = docsByFormat[formatId];
  return docs ? Object.keys(docs).length : 0;
}
