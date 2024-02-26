import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export interface IProducts {
  products: IProduct[]
  productsQuiz: IProduct[]
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
    productsQuiz: [],
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
    const response = await fetch(`https://dummyjson.com/products?limit=100`)
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

export const updateProduct =createAsyncThunk(
  'product/updateProduct',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (product:any)=>{
 fetch(`https://dummyjson.com/products/${product.id}`, {
  method: 'PUT', /* or PATCH */
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(product)
})
.then(res => res.json())
.then(console.log)
  
}

,
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
    builder.addCase(fetchProductByParam.rejected, (_state, action) => {
      console.error("Не удалось загрузить Продукты", action.error)
    })
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
        
      state.products = payload.products
      state.productsQuiz = payload.products
    })
    builder.addCase(fetchProducts.rejected, (_state, action) => {
      console.error("Не удалось загрузить Продукты", action.error)
    })
    builder.addCase(fetchProductsWithLimit.fulfilled, (state, { payload }) => {
      state.products = payload.products
    })
    builder.addCase(fetchProductsWithLimit.rejected, (_state, action) => {
      console.error("Не удалось загрузить Продукты", action.error)
    })
     builder.addCase(fetchProductsRequest.fulfilled, (state, { payload }) => {
      state.products = payload.products
    })
    builder.addCase(fetchProductsRequest.rejected, (_state, action) => {
      console.error("Не удалось загрузить Продукты", action.error)
    })
    builder.addCase(fetchProductsbyId.fulfilled, (state, { payload }) => {
      
      state.currentProductAdmin = payload    })
      builder.addCase(fetchProductsbyId.rejected, (_state, action) => {
      console.error("Не удалось загрузить Продукты", action.error)
    })
    builder.addCase(updateProduct.fulfilled, (_state, { payload }) => {
      // state.products[payload.id] = payload
      console.log(payload," успех");
      
    })
    builder.addCase(updateProduct.rejected, (_state, action) => {
        console.error("Не удалось обновить ", action.error)
    })
  }
})


export default productSlice.reducer