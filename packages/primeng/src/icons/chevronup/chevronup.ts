import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="chevron-up"]',
    standalone: true,
    template: ` <svg:path d="M17,15.25a.74.74,0,0,1-.53-.22L12,10.56,7.53,15A.75.75,0,0,1,6.47,14l5-5a.75.75,0,0,1,1.06,0l5,5a.75.75,0,0,1,0,1.06A.74.74,0,0,1,17,15.25Z" fill="currentColor" /> `
})
export class ChevronUpIcon extends BaseIcon {}
