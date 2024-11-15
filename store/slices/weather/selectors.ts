import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '@/store/types/TStore';

export const selectWeather = (state: RootState) => state.weather;

const selectCurrentWeather = createSelector(selectWeather, ({
  weather,
  error,
  loading,
  recentLocations,
  showSearch,
  metric,
}) => ({
  weather,
  error,
  loading,
  recentLocations,
  showSearch,
  metric,
}));
export default selectCurrentWeather;
