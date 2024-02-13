import {Component} from "../component";
import {LayoutType} from "./layout-type";

export interface LayoutProperties {
    type: LayoutType;
    components: Component[];
}
