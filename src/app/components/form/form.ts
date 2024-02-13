import { Component } from '../component';
import { FormProperties } from './form-properties';
import {ComponentType} from "../component-type";

export class Form implements Component {
  type = ComponentType.form;
  properties?: FormProperties;
}
