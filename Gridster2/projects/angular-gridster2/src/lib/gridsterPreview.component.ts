import {Component, ElementRef, Inject, OnDestroy, Renderer2, ViewEncapsulation} from '@angular/core';

import {GridsterComponent} from './gridster.component';

@Component({
  selector: 'gridster-preview',
  template: '',
  styleUrls: ['./gridsterPreview.css'],
  encapsulation: ViewEncapsulation.None
})
export class GridsterPreviewComponent implements OnDestroy {
  el: HTMLElement;
  gridster: GridsterComponent;

  constructor(@Inject(ElementRef)  el: ElementRef,  gridster: GridsterComponent, @Inject(Renderer2) public renderer: Renderer2) {
    this.el = el.nativeElement;
    this.gridster = gridster;
    this.gridster.previewStyle = this.previewStyle.bind(this);
  }

  ngOnDestroy(): void {
    // @ts-ignore
    delete this.el;
    // @ts-ignore
    delete this.gridster.previewStyle;
    // @ts-ignore
    delete this.gridster;
  }

  previewStyle(drag?: boolean): void {
    if (!this.gridster.movingItem) {
      this.renderer.setStyle(this.el, 'display', '');
    } else {
      if (this.gridster.compact && drag) {
        this.gridster.compact.checkCompactItem(this.gridster.movingItem);
      }
      this.renderer.setStyle(this.el, 'display', 'block');
      this.gridster.gridRenderer.updateItem(this.el, this.gridster.movingItem, this.renderer);
    }
  }
}
