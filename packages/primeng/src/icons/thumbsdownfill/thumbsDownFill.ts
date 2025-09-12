import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="thumbs-down-fill"]',
    standalone: true,
    template: `
        <svg:path
            d="M20,5.61v5.77c0,.89-.73,1.62-1.62,1.62h-1.61V4h1.61c.9,0,1.62,.72,1.62,1.61Zm-14.66-.37l-1.32,7.5c-.16,.92,.54,1.76,1.48,1.76h4.78v3.5c0,1.1,.9,2,1.99,2h.09c.4,0,.76-.24,.92-.61l2.73-6.39V4s-9.2,0-9.2,0c-.73,0-1.35,.52-1.48,1.24Z"
            fill="currentColor"
        />
    `
})
export class ThumbsDownFillIcon extends BaseIcon {}
