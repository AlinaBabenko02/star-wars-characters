import { useState } from "react";
import { Input } from "antd";
import { CharactersList } from "../../components/characters-list/CharactersList";
import s from "./styles.module.css";
import { useCharacters } from "../../../data/api/hooks";

const { Search } = Input;

export const CharactersListScreen = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const { data: characters, isLoading: charactersLoading } =
    useCharacters(searchValue);

  return (
    <div className={s.root}>
      <img src="images/star-wars.png" alt="Star Wars" height={120} />
      <Search
        placeholder="Search character by name"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onSearch={setSearchValue}
        loading={charactersLoading}
        className={s.search}
      />
      <CharactersList characters={characters} isLoading={charactersLoading} />
    </div>
  );
};
