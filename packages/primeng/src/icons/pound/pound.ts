import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="pound"]',
    standalone: true,
    template: `
        <svg:path
            d="M17.54,19.25H8.1l2-2.82a.76.76,0,0,0,.14-.43V12.75h3.25a.75.75,0,0,0,0-1.5H10.21V8a3.09,3.09,0,0,1,3.17-3.25,3.14,3.14,0,0,1,3.33,3.41v1a.75.75,0,0,0,1.5,0v-1a4.62,4.62,0,0,0-4.83-4.91A4.57,4.57,0,0,0,8.71,8v3.25H6.46a.75.75,0,0,0,0,1.5H8.71v3L6.05,19.57a.76.76,0,0,0,0,.78.74.74,0,0,0,.66.4H17.54a.75.75,0,0,0,0-1.5Z"
            fill="currentColor"
        />
    `
})
export class PoundIcon extends BaseIcon {}
