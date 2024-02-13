import {LayoutProperties} from "./layout-properties";
import {Component} from "../component";
import {ComponentType} from "../component-type";

export class Layout implements Component {
    type = ComponentType.layout;
    properties?: LayoutProperties;
}
