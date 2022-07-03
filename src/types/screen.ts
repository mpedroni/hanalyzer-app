import { Route } from "@react-navigation/native";

export interface Screen<N extends string> {
  navigation: any;
  route: Route<N>;
}
