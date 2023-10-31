import { SearchFormContaier } from "./styles";
import { MagnifyingGlass } from "phosphor-react";


export function SearchForm() {
  return (
    <SearchFormContaier>
      <input type="text" placeholder="Busque por transacoes" />

      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContaier>
  )
}