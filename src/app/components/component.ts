import {ComponentType} from "./component-type";

export interface Component {
  type: ComponentType;
  properties?: any;
}
