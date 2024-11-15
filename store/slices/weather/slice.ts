import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type IWeather from '@/store/slices/weather/interfaces/IWeather';
import type IWeatherParams from '@/store/slices/weather/interfaces/IWeatherParams';
import type IWeatherResponse from '@/store/slices/weather/interfaces/IWeatherResponse';

import { API_KEY, API_URL } from '@/constants/General';

export const fetchWeather = createAsyncThunk<IWeatherResponse, IWeatherParams>(
  'weather/fetchWeather',
  async ({ city, metric }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}?q=${city}&units=${metric}&appId=${API_KEY}`);

      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data: IWeatherResponse = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue('Failed to fetch weather data');
    }
  },
);
export const initialState: IWeather = {
  weather: null as IWeatherResponse | null,
  loading: false,
  error: null as string | null,
  recentLocations: [],
  metric: 'metric',
  showSearch: false,
  location: '',
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setMetric: (state, action: PayloadAction<'metric' | 'imperial'>) => {
      state.metric = action.payload;
    },
    setShowSearch: (state, action: PayloadAction<boolean>) => {
      state.showSearch = action.payload;
    },
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weather = action.payload;
        state.showSearch = false;
        state.location = '';
        const isLocationPresent = state.recentLocations.includes(action.payload.name);

        if (!isLocationPresent) {
          state.recentLocations.unshift(action.payload.name);
        }

        if (state.recentLocations.length > 5) {
          state.recentLocations.pop();
        }
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {
  setMetric,
  setShowSearch,
  setLocation,
} = weatherSlice.actions;

export default weatherSlice.reducer;
