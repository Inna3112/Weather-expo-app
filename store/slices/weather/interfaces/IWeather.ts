import type IWeatherResponse from '@/store/slices/weather/interfaces/IWeatherResponse';

export default interface IWeather {
  weather: IWeatherResponse | null,
  loading: boolean,
  error: string | null,
  recentLocations: string[],
  metric: 'metric' | 'imperial',
  showSearch: boolean,
  location: string,
}
