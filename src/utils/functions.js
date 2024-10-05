export function paginateArray(array, pageSize) {
  const numPages = Math.ceil(array.length / pageSize);
  const paginatedArray = [];
  for (let i = 0; i < numPages; i++) {
    const startIndex = i * pageSize;
    const endIndex = Math.min((i + 1) * pageSize, array.length);
    const page = array.slice(startIndex, endIndex);
    paginatedArray.push(page);
  }

  return paginatedArray;
}
