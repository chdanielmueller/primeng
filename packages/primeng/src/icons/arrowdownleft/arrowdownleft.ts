import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="arrow-down-left"]',
    standalone: true,
    template: ` <svg:path d="M15.54,17.7a.75.75,0,0,0,0-1.5H8.86l8.62-8.62a.75.75,0,1,0-1.06-1.06L7.8,15.14V8.46a.75.75,0,0,0-1.5,0V17a.75.75,0,0,0,.06.29.76.76,0,0,0,.69.46Z" fill="currentColor" /> `
})
export class ArrowDownLeftIcon extends BaseIcon {}
