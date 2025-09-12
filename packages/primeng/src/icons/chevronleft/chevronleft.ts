import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="chevron-left"]',
    standalone: true,
    template: ` <svg:path d="M14,17.75a.74.74,0,0,1-.53-.22l-5-5a.75.75,0,0,1,0-1.06l5-5a.75.75,0,0,1,1.06,1.06L10.06,12l4.47,4.47a.75.75,0,0,1,0,1.06A.74.74,0,0,1,14,17.75Z" fill="currentColor" /> `
})
export class ChevronLeftIcon extends BaseIcon {}
