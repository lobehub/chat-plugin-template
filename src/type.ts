export interface WeatherParams {
  city: string;
  extensions?: 'base' | 'all';
}

export type ResponseResult = {
  hello: string;
};
