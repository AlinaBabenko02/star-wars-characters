import { useState } from "react";
import { Input } from "antd";
import { CharactersList } from "../../components/characters-list/CharactersList";
import s from "./styles.module.css";
import { useCharacters } from "../../../data/api/hooks";
import { Notification } from "../../components/characters-list/Notification";

const { Search } = Input;

export const CharactersListScreen: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchIsValid, setSearchIsValid] = useState<boolean>(true);

  const { data: characters, isLoading: charactersLoading } = useCharacters(
    searchValue,
    searchIsValid
  );

  const searchHandler = (value: string) => {
    const valueLength = value.length;
    setSearchIsValid(valueLength <= 5);
    setSearchValue(value);
  };

  return (
    <div className={s.root}>
      <img src="images/star-wars.png" alt="Star Wars" height={120} />
      <Search
        placeholder="Search character by name"
        value={searchValue}
        onChange={(e) => searchHandler(e.target.value)}
        onSearch={searchHandler}
        loading={charactersLoading}
        className={s.search}
      />
      {searchIsValid ? (
        <CharactersList characters={characters} isLoading={charactersLoading} />
      ) : (
        <Notification>
          The length of the search query should not exceed 5 characters.
          <br /> Please change your request.
        </Notification>
      )}
    </div>
  );
};
