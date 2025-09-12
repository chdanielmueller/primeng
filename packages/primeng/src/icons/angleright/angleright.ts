import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="angle-right"]',
    standalone: true,
    template: ` <svg:path d="M10.25,16.25A.74.74,0,0,1,9.72,16a.75.75,0,0,1,0-1.06l3-3-3-3A.75.75,0,0,1,10.78,8l3.5,3.5a.75.75,0,0,1,0,1.06L10.78,16A.74.74,0,0,1,10.25,16.25Z" fill="currentColor" /> `
})
export class AngleRightIcon extends BaseIcon {}
