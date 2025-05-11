export enum COCKTAIL_CODE {
  MARGARITA = 'margarita',
  MOJITO = 'mojito',
  A1 = 'a1',
  KIR = 'kir',
}

export type CocktailCode = `${COCKTAIL_CODE}`

export interface Cocktail {
  idDrink: string
  strDrink: string
  strDrinkThumb: string
  strInstructions: string
}
