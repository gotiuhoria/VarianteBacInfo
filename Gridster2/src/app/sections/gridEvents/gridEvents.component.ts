import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

import {
  DisplayGrid,
  GridsterComponentInterface,
  GridsterConfig,
  GridsterItem,
  GridsterItemComponentInterface,
  GridType
} from 'angular-gridster2';

@Component({
  selector: 'app-grid-events',
  templateUrl: './gridEvents.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class GridEventsComponent implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  remove: boolean;


  height: number;
  width: number;

  dataSource;

  constructor() {
    this.dataSource = [{
      day: 'Monday',
      oranges: 3
    }, {
      day: 'Tuesday',
      oranges: 2
    }, {
      day: 'Wednesday',
      oranges: 3
    }, {
      day: 'Thursday',
      oranges: 4
    }, {
      day: 'Friday',
      oranges: 6
    }, {
      day: 'Saturday',
      oranges: 11
    }, {
      day: 'Sunday',
      oranges: 4
    }];

    this.height = 500;
    this.width = 600;

  }

  static itemChange(item: GridsterItem, itemComponent: GridsterItemComponentInterface): void {
    // tslint:disable-next-line:no-console
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item: GridsterItem, itemComponent: GridsterItemComponentInterface): void {
    // tslint:disable-next-line:no-console
    console.info('itemResized', item, itemComponent);
  }

  static itemInit(item: GridsterItem, itemComponent: GridsterItemComponentInterface): void {
    // tslint:disable-next-line:no-console
    console.info('itemInitialized', item, itemComponent);
  }

  static itemRemoved(item: GridsterItem, itemComponent: GridsterItemComponentInterface): void {
    // tslint:disable-next-line:no-console
    console.info('itemRemoved', item, itemComponent);
  }

  static itemValidate(item: GridsterItem): boolean {
    return item.cols > 0 && item.rows > 0;
  }

  static gridInit(grid: GridsterComponentInterface): void {
    // tslint:disable-next-line:no-console
    console.info('gridInit', grid);
  }

  static gridDestroy(grid: GridsterComponentInterface): void {
    // tslint:disable-next-line:no-console
    console.info('gridDestroy', grid);
  }

  static gridSizeChanged(grid: GridsterComponentInterface): void {
    // tslint:disable-next-line:no-console
    console.info('gridSizeChanged', grid);
  }

  ngOnInit(): void {
    this.options = {
      gridType: GridType.Fit,
      displayGrid: DisplayGrid.Always,
      initCallback: GridEventsComponent.gridInit,
      destroyCallback: GridEventsComponent.gridDestroy,
      gridSizeChangedCallback: GridEventsComponent.gridSizeChanged,
      itemChangeCallback: GridEventsComponent.itemChange,
      itemResizeCallback: GridEventsComponent.itemResize,
      itemInitCallback: GridEventsComponent.itemInit,
      itemRemovedCallback: GridEventsComponent.itemRemoved,
      itemValidateCallback: GridEventsComponent.itemValidate,
      pushItems: true,
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true
      }
    };

    this.dashboard = [
      {cols: 2, rows: 1, y: 0, x: 0, hasContent: true},
      {cols: 2, rows: 2, y: 0, x: 2},
      {cols: 1, rows: 1, y: 0, x: 4},
      {cols: 3, rows: 2, y: 1, x: 4},
      {cols: 1, rows: 1, y: 4, x: 5},
      {cols: 1, rows: 1, y: 2, x: 1},
      {cols: 2, rows: 2, y: 5, x: 5},
      {cols: 2, rows: 2, y: 3, x: 2},
      {cols: 2, rows: 1, y: 2, x: 2},
      {cols: 1, rows: 1, y: 3, x: 4},
      {cols: 1, rows: 1, y: 0, x: 6}
    ];
  }

  changedOptions(): void {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event: MouseEvent | TouchEvent, item): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem(): void {
    this.dashboard.push({x: 0, y: 0, cols: 1, rows: 1});
  }

  destroy(): void {
    this.remove = !this.remove;
  }
}