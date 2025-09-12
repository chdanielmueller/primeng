import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="caret-right"]',
    standalone: true,
    template: ` <svg:path d="M8,18.75a.76.76,0,0,1-.33-.08A.75.75,0,0,1,7.25,18V6a.75.75,0,0,1,.42-.67.74.74,0,0,1,.78.07l8,6a.75.75,0,0,1,0,1.2l-8,6A.74.74,0,0,1,8,18.75ZM8.75,7.5v9l6-4.5Z" fill="currentColor" /> `
})
export class CaretRightIcon extends BaseIcon {}
