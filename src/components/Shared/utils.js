import * as R from "ramda";

export const mapIndexed = R.addIndex(R.map);

export const groupBy = (collection, prop) => {
  return R.keys(collection).reduce((groups, item) => {
    const groupKey = collection[item][prop];
    groups[groupKey] = groups[groupKey] || []
    groups[groupKey].push(collection[item])
    return groups
  }, {});
}
