export const groupBy = (collection, prop) => {
  return Object.keys(collection).reduce((groups, item) => {
    const groupKey = collection[item][prop];
    groups[groupKey] = groups[groupKey] || []
    groups[groupKey].push(collection[item])
    return groups
  }, {});
}
