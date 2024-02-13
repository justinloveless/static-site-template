import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from 'src/app/services/page.service';
import { Page } from 'src/app/components/page/page';
import { FormComponent } from '../form/form.component';
import { HeaderComponent } from '../header/header.component';
import { ImageComponent } from '../image/image.component';
import { ParagraphComponent } from '../paragraph/paragraph.component';
import { CommonModule } from '@angular/common';
import {ComponentType} from "../component-type";
import {LayoutComponent} from "../layout/layout.component";
import { DynamicComponentDirective } from '../DynamicComponentDirective';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [FormComponent, HeaderComponent, ImageComponent, ParagraphComponent, CommonModule, LayoutComponent, DynamicComponentDirective],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
})
export class PageComponent implements OnInit {
  page: Page | undefined;

  constructor(
    private route: ActivatedRoute,
    private pageService: PageService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const pageId = params.get('pageId');
      if (pageId) {
        this.loadPage(pageId);
      }
    });
  }

  loadPage(pageId: string): void {
    this.pageService.getSiteData().subscribe((result) => {
      // console.log('pages', result.pages);

      this.page = result.pages?.find((p) => p.pageId === pageId);
      // Handle the case where the page is not found
    });
  }

  protected readonly ComponentType = ComponentType;
}
