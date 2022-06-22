export interface IEvent {
  id?: string;
  image: string;
  title: string;
  location: string;
  date: string;
  message: string;
  host: string;
  phone: string;
  email: string;
  facebook: string;
  eventType: string;
}

export interface IProfile {
  id?: string;
  username: string;
  contact: string;
  occupation: string;
  hobby: string;
  gender: string;
  favoriteGroups: string[];
  images: File[];
}
export interface ICategory {
  id: string;
  name: string;
}
