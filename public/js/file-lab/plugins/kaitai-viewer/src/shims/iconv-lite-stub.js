export default {
  decode: function (buffer) {
    return buffer.toString("utf8");
  },
  encode: function (string, encoding) {
    return Buffer.from(string, encoding || "utf8");
  }
};
