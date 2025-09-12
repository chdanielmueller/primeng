import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="mobile"]',
    standalone: true,
    template: `
        <svg:path
            d="M16,3.25H8c-.96,0-1.75,.79-1.75,1.75v14c0,.96,.79,1.75,1.75,1.75h8c.96,0,1.75-.79,1.75-1.75V5c0-.96-.79-1.75-1.75-1.75Zm.25,15.75c0,.14-.11,.25-.25,.25H8c-.14,0-.25-.11-.25-.25V5c0-.14,.11-.25,.25-.25h8c.14,0,.25,.11,.25,.25v14Zm-3.25-3c0,.55-.45,1-1,1s-1-.45-1-1,.45-1,1-1,1,.45,1,1Z"
            fill="currentColor"
        />
    `
})
export class MobileIcon extends BaseIcon {}
