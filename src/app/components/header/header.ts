import { Component } from '../component';
import { HeaderProperties } from './header-properties';
import {ComponentType} from "../component-type";

export class Header implements Component {
  type = ComponentType.header;
  properties?: HeaderProperties;
}
