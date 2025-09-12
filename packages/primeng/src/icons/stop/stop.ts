import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="stop"]',
    standalone: true,
    template: `
        <svg:path
            d="M17,19.75H7A2.75,2.75,0,0,1,4.25,17V7A2.75,2.75,0,0,1,7,4.25H17A2.75,2.75,0,0,1,19.75,7V17A2.75,2.75,0,0,1,17,19.75ZM7,5.75A1.25,1.25,0,0,0,5.75,7V17A1.25,1.25,0,0,0,7,18.25H17A1.25,1.25,0,0,0,18.25,17V7A1.25,1.25,0,0,0,17,5.75Z"
            fill="currentColor"
        />
    `
})
export class StopIcon extends BaseIcon {}
