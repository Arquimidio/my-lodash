export function differenceBy(
  arr: any[],
  valuesToExclude: any[],
  modifier: ((val: any) => any) | string,
) {
  let finalModifier;

  if (typeof modifier === 'string') {
    finalModifier = (val: any) => val[modifier]
  } else {
    finalModifier = modifier;
  };

  const modifiedValuesToExclude = valuesToExclude.map(finalModifier);

  return arr.filter((element) => (
    !modifiedValuesToExclude.includes(finalModifier(element))
  ))
}