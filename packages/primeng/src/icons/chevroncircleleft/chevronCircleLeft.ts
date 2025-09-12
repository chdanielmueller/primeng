import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="chevron-circle-left"]',
    standalone: true,
    template: `
        <svg:path d="M12,21a9,9,0,1,1,9-9A9,9,0,0,1,12,21ZM12,4.5A7.5,7.5,0,1,0,19.5,12,7.5,7.5,0,0,0,12,4.5Z" fill="currentColor" />
        <svg:path d="M14,16.75a.74.74,0,0,1-.53-.22l-4-4a.75.75,0,0,1,0-1.06l4-4a.75.75,0,0,1,1.06,1.06L11.06,12l3.47,3.47a.75.75,0,0,1,0,1.06A.74.74,0,0,1,14,16.75Z" fill="currentColor" />
    `
})
export class ChevronCircleLeftIcon extends BaseIcon {}
