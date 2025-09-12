import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="caret-up"]',
    standalone: true,
    template: ` <svg:path d="M18,16.75H6a.76.76,0,0,1-.67-.41.75.75,0,0,1,.07-.79l6-8a.77.77,0,0,1,1.2,0l6,8a.75.75,0,0,1,.07.79A.76.76,0,0,1,18,16.75ZM7.5,15.25h9l-4.5-6Z" fill="currentColor" /> `
})
export class CaretUpIcon extends BaseIcon {}
