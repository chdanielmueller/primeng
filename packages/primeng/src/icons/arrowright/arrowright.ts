import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="arrow-right"]',
    standalone: true,
    template: `
        <svg:path d="M13,18.75a.74.74,0,0,1-.53-.22.75.75,0,0,1,0-1.06L17.94,12,12.47,6.53a.75.75,0,0,1,1.06-1.06l6,6a.75.75,0,0,1,0,1.06l-6,6A.74.74,0,0,1,13,18.75Z" fill="currentColor" />
        <svg:path d="M19,12.75H5a.75.75,0,0,1,0-1.5H19a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
    `
})
export class ArrowRightIcon extends BaseIcon {}
