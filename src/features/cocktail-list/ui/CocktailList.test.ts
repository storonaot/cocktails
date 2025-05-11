import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { THUMB_IMG } from '@/shared/tests/mocks/constants'
import { CocktailList } from '.'

const MOCK_COCKTAIL_LIST = [
  {
    idDrink: '1',
    strDrink: 'Margarita',
    strDrinkThumb: THUMB_IMG,
    strInstructions: 'Mix it all!',
  },
  {
    idDrink: '2',
    strDrink: 'Mojito',
    strDrinkThumb: THUMB_IMG,
    strInstructions: 'Stir and serve.',
  },
]

const SELECTED_ID = '1'

describe('CocktailList', () => {
  it('renders cocktail buttons and highlights selected', () => {
    const wrapper = mount(CocktailList, {
      props: {
        cocktails: MOCK_COCKTAIL_LIST,
        selectedId: SELECTED_ID,
      },
    })

    //NOTE: проверим, что текст есть
    expect(wrapper.text()).toContain('Margarita')
    expect(wrapper.text()).toContain('Mojito')

    //NOTE: найдём кнопки
    const buttons = wrapper.findAll('button')
    expect(buttons).toHaveLength(2)

    //NOTE: проверим, что нужный имеет класс .isActive
    expect(buttons[0].classes()).toContain('isActive')
    expect(buttons[1].classes()).not.toContain('isActive')
  })

  it('emits "select" event when a cocktail is clicked', async () => {
    const wrapper = mount(CocktailList, {
      props: {
        cocktails: MOCK_COCKTAIL_LIST,
        selectedId: null,
      },
    })

    const buttons = wrapper.findAll('button')

    //NOTE: клик по второй кнопке (Mojito)
    await buttons[1].trigger('click')

    expect(wrapper.emitted('select')).toBeTruthy()
    expect(wrapper.emitted('select')![0]).toEqual(['2']) //NOTE: должен передать idDrink
  })

  it('renders nothing if cocktails array is empty', () => {
    const wrapper = mount(CocktailList, {
      props: {
        cocktails: [],
        selectedId: null,
      },
    })

    expect(wrapper.findAll('button')).toHaveLength(0)
  })
})
