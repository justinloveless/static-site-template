import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { HeaderProperties } from 'src/app/components/header/header-properties';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @Input() properties?: HeaderProperties;

  ngOnInit(): void {
    // console.log('properties for Header:', this.properties);
  }
}
