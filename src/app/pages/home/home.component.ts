import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'pk-home',
  template: `
    <p>{{ 'hello' | translate }}</p>
    <button (click)="translate.use('en')">EN</button>
    <button (click)="translate.use('hu')">HU</button>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}
}
