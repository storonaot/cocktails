import { useQuery } from '@tanstack/vue-query'
import { fetchCocktails } from '@/entities/cocktail/api/fetchCocktails'
import { computed, Ref } from 'vue'

const STALE_TIME_5_MINUTES = 1000 * 60 * 5

export const useCocktails = (code: Ref<string>) =>
  useQuery({
    queryKey: computed(() => ['cocktails', code.value]),
    queryFn: () => fetchCocktails(code.value),
    staleTime: STALE_TIME_5_MINUTES,
    refetchOnWindowFocus: false,
  })
