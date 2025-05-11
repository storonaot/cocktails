import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CocktailCard from './CocktailCard.vue'
import { THUMB_IMG } from '@/shared/tests/mocks/constants'

const MOCK_COCKTAIL = {
  idDrink: '99',
  strDrink: 'Negroni',
  strDrinkThumb: THUMB_IMG,
  strInstructions: 'Stir ingredients with ice and strain.',
}

describe('CocktailCard', () => {
  it('renders cocktail data correctly', () => {
    const wrapper = mount(CocktailCard, {
      props: { cocktail: MOCK_COCKTAIL },
    })

    expect(wrapper.text()).toContain('Negroni')
    expect(wrapper.text()).toContain('Stir ingredients with ice and strain.')

    const img = wrapper.find('img')
    expect(img.attributes('src')).toBe(MOCK_COCKTAIL.strDrinkThumb)
    expect(img.attributes('alt')).toContain('Negroni')
  })
})
