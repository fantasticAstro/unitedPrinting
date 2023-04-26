export interface WindowWithGtagRef extends Window {
  gtagRef?: (arg0: string, arg1: string, arg2: object) => void;
}
