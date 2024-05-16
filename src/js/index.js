const pokemonsMenuList = document.querySelectorAll(".pokemon")

pokemonsMenuList.forEach(pokemon => {
    pokemon.addEventListener("click", () => {
        const activePokemonList = document.querySelector(".active")
        activePokemonList.classList.remove("active")
        pokemon.classList.add("active")

        const selectedPokemon = document.querySelector(".pokemon-selected")        
        selectedPokemon.classList.remove("pokemon-selected")

        const idSelectedPokemon = pokemon.attributes.id.value

        const pokemonCardToOpen = document.getElementById(`${idSelectedPokemon}-card`)
        pokemonCardToOpen.classList.add("pokemon-selected")
    })
})