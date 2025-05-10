import { api } from '@/shared/api/axios'

export async function fetchCocktails(code: string) {
  const res = await api.get('/search.php', {
    params: { s: code },
  })

  return res.data.drinks
}
