import {ReactElement} from 'react';
export interface Basic {
  title: string;
}
export interface iSidebar {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}
export interface iListItem {
  icon: ReactElement;
  info: string;
}
export interface iLabel {
  label: string;
  type: string;
  isRequired?: boolean;
}
export interface iService extends Basic {
  image?: string;
  alt: string;
}
export interface iServiceListArray extends Basic {
  list: string[];
}

export interface iProjects extends Basic {
  id: string;
  images: string[];
}
export interface iLinks {
  setOpen: (value: boolean) => void;
  styles?: string;
}
