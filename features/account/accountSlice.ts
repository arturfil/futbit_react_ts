import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

interface UserState {
  name: string;
  email: string;
  password: string;
  status: "loading" | "success" | "failure" | "idle";
}

const initialState: UserState = {
  name: "",
  email: "",
  password: "",
  status: "idle",
};

export const loginUser = createAsyncThunk<any, Object>(
  "account/loginUser",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        data
      );
      const { token } = response.data;
      localStorage.setItem("jwt_futbit", JSON.stringify({ token }));
      toast.success("Succesfully Loged in");
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<Object>) => {
      console.log("Works");
    },
  },
});

export default accountSlice.reducer;
