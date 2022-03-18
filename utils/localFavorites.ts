const existInFavorite = (id: number) => {
  const favorites: number[] = JSON.parse(window.localStorage.getItem('favorites') || '[]');
  return {
    favorites,
    includes: favorites.includes(id)
  }
}

const toggleFavorites = (id: number): void => {
  let { favorites, includes } = existInFavorite(id)
  if (includes) {
    favorites = favorites.filter((pokemon) => id != pokemon)
  } else {
    favorites.push(id)
  }
  localStorage.setItem('favorites', JSON.stringify(favorites))
}

export default {
  toggleFavorites,
  existInFavorite
}
