export function createInflate() {
  throw new Error("zlib inflate is not available in the File Lab browser bundle");
}

export function createDeflate() {
  throw new Error("zlib deflate is not available in the File Lab browser bundle");
}

export default {
  createInflate: createInflate,
  createDeflate: createDeflate
};
