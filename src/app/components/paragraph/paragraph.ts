import { Component } from '../component';
import { ParagraphProperties } from './paragraph-properties';
import {ComponentType} from "../component-type";

export class Paragraph implements Component {
  type = ComponentType.paragraph;
  properties?: ParagraphProperties;
}
