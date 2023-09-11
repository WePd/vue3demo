import { ref, onMounted } from 'vue'
import { getCategoryAPI } from '@/api/category'
import { useRoute } from 'vue-router'
import { Category } from '@/api/model/categoryModel'


export function useCategory() {
  const categoryData = ref({} as Category)
  const route = useRoute()
  console.log(route.params.id);

  const getCategory = async (id = route.params.id as string) => {
    const res = await getCategoryAPI(id)
    categoryData.value = res.result
  }

onMounted(() => getCategory())
  return {
    getCategory,
    categoryData
  }
}