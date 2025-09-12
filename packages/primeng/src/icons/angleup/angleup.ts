import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="angle-up"]',
    standalone: true,
    template: ` <svg:path d="M15.5,14.5a.74.74,0,0,1-.53-.22l-3-3-3,3A.75.75,0,0,1,8,13.22l3.5-3.5a.75.75,0,0,1,1.06,0l3.5,3.5a.75.75,0,0,1,0,1.06A.74.74,0,0,1,15.5,14.5Z" fill="currentColor" /> `
})
export class AngleUpIcon extends BaseIcon {}
