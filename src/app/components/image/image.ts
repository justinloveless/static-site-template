import { Component } from '../component';
import { ImageProperties } from './image-properties';
import {ComponentType} from "../component-type";

export class Image implements Component {
  type = ComponentType.image;
  properties?: ImageProperties;
}
