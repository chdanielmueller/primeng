import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="minus-circle"]',
    standalone: true,
    template: `
        <svg:path d="M12,21a9,9,0,1,1,9-9A9,9,0,0,1,12,21ZM12,4.5A7.5,7.5,0,1,0,19.5,12,7.5,7.5,0,0,0,12,4.5Z" fill="currentColor" />
        <svg:path d="M16,12.75H8a.75.75,0,0,1,0-1.5h8a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
    `
})
export class MinusCircleIcon extends BaseIcon {}
