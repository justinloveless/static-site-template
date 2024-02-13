import { Component, Input } from '@angular/core';
import { ParagraphProperties } from 'src/app/components/paragraph/paragraph-properties';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-paragraph',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './paragraph.component.html',
  styleUrl: './paragraph.component.scss',
})
export class ParagraphComponent {
  @Input() properties?: ParagraphProperties;
}
