import { FilterContainer, FilterInput } from "./Filter.styled";


export const Filter = ({ filter, filterInput }) => (
    <FilterContainer>
        <FilterInput
            type="text"
            name={filter}
            onChange={filterInput}
        />
    </FilterContainer>
)