import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="arrow-up"]',
    standalone: true,
    template: `
        <svg:path d="M18,11.75a.74.74,0,0,1-.53-.22L12,6.06,6.53,11.53a.75.75,0,0,1-1.06-1.06l6-6a.75.75,0,0,1,1.06,0l6,6a.75.75,0,0,1,0,1.06A.74.74,0,0,1,18,11.75Z" fill="currentColor" />
        <svg:path d="M12,19.75a.76.76,0,0,1-.75-.75V5a.75.75,0,0,1,1.5,0V19A.76.76,0,0,1,12,19.75Z" fill="currentColor" />
    `
})
export class ArrowUpIcon extends BaseIcon {}
