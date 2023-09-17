export interface category {
  id: number;
  name: String;
}

export interface brand {
  id: number;
  name: String;
  items: Array<brandItem>;
}

export interface brandItem {
  id: number;
  name: String;
}
