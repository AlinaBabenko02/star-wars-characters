export const getCharacterId = (characterUrl: string) => {
  const supportingArray = characterUrl.split("/");
  return supportingArray[supportingArray.length - 2];
};
