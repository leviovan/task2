import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export interface IProducts {
  products: IProduct[]
  total: number
  skip: number
  limit: number
  currentProductAdmin:IProduct
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

const initialState: IProducts = {
    products: [],
    total: 0,
    skip: 0,
    limit: 0,
    currentProductAdmin:{
      id: 0,
      title: '    ',
      description: '',
      price: 0,
      discountPercentage: 0,
      rating: 0,
      stock: 0,
      brand: '',
      category: '',
      thumbnail: '',
      images: []
    }
}
export const fetchProductByParam = createAsyncThunk(
  'product/fetchProductByParam',

  async (parametrs: string) => {
    const response = await fetch(`https://dummyjson.com/products/category/${parametrs}`)
    return (await response.json())
  },
)
export const fetchProducts = createAsyncThunk(
  'product/fetchProduct',

  async () => {
    const response = await fetch(`https://dummyjson.com/products`)
    return (await response.json())
  },
)

export const fetchProductsWithLimit = createAsyncThunk(
  'product/fetchProductsWithLimit',
  async () => {
    const response = await fetch(`https://dummyjson.com/products?limit=9&skip=0&select=title,price,images`)
    return (await response.json())
  },
)

export const fetchProductsRequest = createAsyncThunk(
  'product/fetchProductsSearrch',
  async (search:string) => {
    const response = await fetch(`https://dummyjson.com/products/search?q=${search}`)
    return (await response.json())
  },
)

export const fetchProductsbyId = createAsyncThunk(
  'product/fetchProductsbyId',
  async (id:number) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    return (await response.json())
  },
)


export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductByParam.fulfilled, (state, { payload }) => {
      state.products = payload.products
    })
    builder.addCase(fetchProductByParam.rejected, (state, action) => {
      console.error("Не удалось загрузить Продукты", action.error)
    })
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
        console.log(payload);
        
      state.products = payload.products
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      console.error("Не удалось загрузить Продукты", action.error)
    })
    builder.addCase(fetchProductsWithLimit.fulfilled, (state, { payload }) => {
      state.products = payload.products
    })
    builder.addCase(fetchProductsWithLimit.rejected, (state, action) => {
      console.error("Не удалось загрузить Продукты", action.error)
    })
     builder.addCase(fetchProductsRequest.fulfilled, (state, { payload }) => {
      state.products = payload.products
    })
    builder.addCase(fetchProductsRequest.rejected, (state, action) => {
      console.error("Не удалось загрузить Продукты", action.error)
    })
    builder.addCase(fetchProductsbyId.fulfilled, (state, { payload }) => {
      console.log(payload);
      
      state.currentProductAdmin = payload    })
    builder.addCase(fetchProductsbyId.rejected, (state, action) => {
      console.error("Не удалось загрузить Продукты", action.error)
    })
  }

})

// Action creators are generated for each case reducer function
// export const { } = categorySlice.actions

export default productSlice.reducer