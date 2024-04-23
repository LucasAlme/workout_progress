import { RootStackParamList } from "./root-stack-param-list";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
