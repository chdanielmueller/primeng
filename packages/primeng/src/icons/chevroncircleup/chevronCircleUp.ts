import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="chevron-circle-up"]',
    standalone: true,
    template: `
        <svg:path d="M12,21a9,9,0,1,1,9-9A9,9,0,0,1,12,21ZM12,4.5A7.5,7.5,0,1,0,19.5,12,7.5,7.5,0,0,0,12,4.5Z" fill="currentColor" />
        <svg:path d="M16,14.75a.74.74,0,0,1-.53-.22L12,11.06,8.53,14.53a.75.75,0,0,1-1.06-1.06l4-4a.75.75,0,0,1,1.06,0l4,4a.75.75,0,0,1,0,1.06A.74.74,0,0,1,16,14.75Z" fill="currentColor" />
    `
})
export class ChevronCircleUpIcon extends BaseIcon {}
