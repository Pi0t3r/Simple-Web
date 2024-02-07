import {ReactElement} from 'react';

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
export interface iService {
  image?: string;
  title: string;
  alt: string;
}
export interface iServiceListArray {
  title: string;
  list: string[];
}

export interface iProjects {
  id: string;
  title: string;
  images: string[];
}
