export const groupBy = (collection, prop) => {
  return Object.keys(collection).reduce((groups, item) => {
    const groupKey = collection[item][prop];
    groups[groupKey] = groups[groupKey] || []
    groups[groupKey].push(collection[item])
    return groups
  }, {});
}

export const getUniqInputId = (prefix = 'react-trix-rte-input-') => {
  const dateTimestamp = new Date().getTime();
  const randomSalt = Math.random().toFixed(9).slice(2)
  return `${prefix}${dateTimestamp}-${randomSalt}`
}
