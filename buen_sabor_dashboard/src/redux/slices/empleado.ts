import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import empleado from '../../types/Empleado';


interface IInitialState {
  empleado: empleado[];
}

const initialState: IInitialState = {
  empleado: [],
}

export const empleadoSlice = createSlice({
  name: 'empleadoState',
  initialState,
  reducers: {
    setEmpleado: (state, action: PayloadAction<empleado[]>) => {
      state.empleado = action.payload;
    },
    resetEmpleado: (state) => {
      state.empleado = [];
    }
  },
})

export const { setEmpleado, resetEmpleado } = empleadoSlice.actions;

export default empleadoSlice.reducer;