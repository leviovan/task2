import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export interface IProducts {
  products: IProduct[]
  total: number
  skip: number
  limit: number
}

export interface IProduct {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}


export interface ICategory {
  category: string[]
  product:IProducts
}

const initialState: ICategory ={
    category:[],
    product:{
      products: [],
      total: 0,
      skip: 0,
      limit: 0
    }
}
   



export const fetchCategory = createAsyncThunk(
  'category/fetchCategory',
  // Declare the type your function argument here:
  async () => {
    const response = await fetch(`https://dummyjson.com/products/categories`)
    // Inferred return type: Promise<MyData>
    return (await response.json())
  },
)
export const fetchProductByParam = createAsyncThunk(
  'category/fetchProductByParam',

  async (parametrs:string) => {
    const response = await fetch(`https://dummyjson.com/products/category/${parametrs}`)
    return (await response.json())
  },
)
export const fetchProducts = createAsyncThunk(
  'category/fetchProduct',

  async () => {
    const response = await fetch(`https://dummyjson.com/products`)
    return (await response.json())
  },
)
export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.fulfilled, (state, { payload }) => {

      state.category = payload
    })
    builder.addCase(fetchCategory.rejected, (state, action) => {
        console.error("Не удалось загрузить категориес", action.error)
    })
     builder.addCase(fetchProductByParam.fulfilled, (state, { payload }) => {

      state.product = payload
    })
    builder.addCase(fetchProductByParam.rejected, (state, action) => {
        console.error("Не удалось загрузить Продукты", action.error)
    })
      builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      state.product = payload
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
        console.error("Не удалось загрузить Продукты", action.error)
    })
  }
})

// Action creators are generated for each case reducer function
// export const { } = categorySlice.actions

export default categorySlice.reducer