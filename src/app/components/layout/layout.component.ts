import {Component, Input, OnInit} from '@angular/core';
import {LayoutProperties} from "./layout-properties";
import {NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
import {LayoutType} from "./layout-type";
import {FormComponent} from "../form/form.component";
import {HeaderComponent} from "../header/header.component";
import {ImageComponent} from "../image/image.component";
import {ParagraphComponent} from "../paragraph/paragraph.component";
import {ComponentType} from "../component-type";
import { DynamicComponentDirective } from '../DynamicComponentDirective';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgForOf,
    FormComponent,
    HeaderComponent,
    ImageComponent,
    ParagraphComponent,
    DynamicComponentDirective,
    NgIf
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit{
  @Input() properties?: LayoutProperties;
  protected readonly LayoutType = LayoutType;
  protected readonly ComponentType = ComponentType;
  
  constructor() {
  }
  
  ngOnInit() {
    // console.log('layout props', this.properties)
    
  }
}
