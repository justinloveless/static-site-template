import {
  ComponentRef,
  Directive,
  Input,
  OnDestroy,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import { ComponentType } from "./component-type";
import { componentMapper } from './dynamic-component.directive';


@Directive({
  selector: '[appDynamicComponent]',
  standalone: true
})
export class DynamicComponentDirective implements OnInit, OnDestroy {
  @Input('appComponentType') type!: ComponentType;
  @Input('appComponentProperties') properties: any;
  componentRef?: ComponentRef<any>;

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    // console.log('input component:', this.type, this.properties);
    if (!this.type) return;
    const component = componentMapper.get(this.type);
    if (component) {
      this.viewContainerRef.clear();
      this.componentRef = this.viewContainerRef.createComponent(component);
      if (this.componentRef.instance) {
        Object.assign(this.componentRef.instance, { properties: this.properties });
      }
    }
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }


}
