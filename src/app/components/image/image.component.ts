import {Component, Inject, Input, OnInit} from '@angular/core';
import { ImageProperties } from 'src/app/components/image/image-properties';
import {APP_BASE_HREF} from "@angular/common";

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent implements OnInit{
  @Input() properties?: ImageProperties;
  imgSrc?: string;

  constructor(@Inject(APP_BASE_HREF) public baseHref: string) {  }

  ngOnInit() {
    this.imgSrc = this.properties?.src ? '.' + this.baseHref + '../assets/' + this.properties?.src : undefined;
  }
}
