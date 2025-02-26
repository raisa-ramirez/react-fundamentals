import { useRef } from "react";

export default function Search() {
    const inputRef = useRef(null)
    const initSearch = () => {
        inputRef.current.focus()
    }
    
    return (
        <>
            <h3>Challenge #4</h3>
            <nav>
                <SearchButton initSearch={initSearch}/>
            </nav>
            <SearchInput inputRef={inputRef}/>
        </>
  );
}

function SearchButton({initSearch}) {
    return (
      <button onClick={initSearch}>
        Buscar
      </button>
    );
}

function SearchInput({inputRef}) {
return (
    <input
    placeholder="¿Buscando algo?"
    ref={inputRef}
    />
);
}
