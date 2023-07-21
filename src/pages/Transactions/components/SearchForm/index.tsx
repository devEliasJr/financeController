import { SearchFormContainer } from "./styles";
import {MagnifyingGlass} from '@phosphor-icons/react'

type Props = {};

export function SearchForm({}: Props) {
  return (
    <SearchFormContainer>
      <input placeholder="Busce por transações" />
      <button type="submit">
        <MagnifyingGlass size={20}/>
        Buscar
      </button>
    </SearchFormContainer>
  );
}
