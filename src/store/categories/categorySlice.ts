import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'





export interface ICategory {
  category: string[]
}

const initialState: ICategory = {
  category: []
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


export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.fulfilled, (state, { payload }) => {
      console.log(payload);
      
      state.category = payload
    })
    builder.addCase(fetchCategory.rejected, (state, action) => {
      console.error("Не удалось загрузить категориес", action.error)
    })
  }

})

// Action creators are generated for each case reducer function
// export const { } = categorySlice.actions

export default categorySlice.reducer