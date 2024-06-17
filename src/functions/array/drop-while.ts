export function dropWhile(
  arr: any[],
  checkCondition: (val: any) => boolean
): any[] {
  const firstElementThatMeetsConditionIndex = arr.findIndex(checkCondition);

  return firstElementThatMeetsConditionIndex >= 0 
    ? arr.slice(arr.findIndex(checkCondition) + 1)
    : [];
}