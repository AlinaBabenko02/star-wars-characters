export const getCharacterId = (characterUrl: string): string => {
  const supportingArray = characterUrl.split("/");
  return supportingArray[supportingArray.length - 2];
};
