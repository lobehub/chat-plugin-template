export interface ClothesItem {
  description: string;
  name: string;
}
export interface ResponseData {
  clothes: ClothesItem[];
  mood: string;
  today: number;
}

export interface RequestData {
  gender: 'man' | 'woman';
  mood: string;
}
