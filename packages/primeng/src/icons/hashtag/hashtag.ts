import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="hashtag"]',
    standalone: true,
    template: `
        <svg:path
            d="M21,7.25H18l.77-3.07a.75.75,0,0,0-1.46-.36l-.86,3.43H10l.77-3.07a.75.75,0,0,0-1.46-.36L8.41,7.25H5a.75.75,0,0,0,0,1.5H8l-1.63,6.5H3a.75.75,0,0,0,0,1.5H6l-.77,3.07a.75.75,0,0,0,1.46.36l.86-3.43H14l-.77,3.07a.75.75,0,0,0,1.46.36l.86-3.43H19a.75.75,0,0,0,0-1.5H16l1.63-6.5H21A.75.75,0,0,0,21,7.25Zm-5,1.5-1.63,6.5H8l1.63-6.5Z"
            fill="currentColor"
        />
    `
})
export class HashtagIcon extends BaseIcon {}
