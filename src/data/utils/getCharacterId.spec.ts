import { getCharacterId } from "./getCharacterId";

const url = "https://swapi.dev/api/people/5/";

test("testing getCharacterId", () => {
  const result = getCharacterId(url);
  expect(result).toBe("5");
});
