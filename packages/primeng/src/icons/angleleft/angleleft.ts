import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="angle-left"]',
    standalone: true,
    template: ` <svg:path d="M13.75,16.25a.74.74,0,0,1-.53-.22l-3.5-3.5a.75.75,0,0,1,0-1.06L13.22,8A.75.75,0,0,1,14.28,9l-3,3,3,3a.75.75,0,0,1,0,1.06A.74.74,0,0,1,13.75,16.25Z" fill="currentColor" /> `
})
export class AngleLeftIcon extends BaseIcon {}
