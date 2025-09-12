import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="clock"]',
    standalone: true,
    template: `
        <svg:path d="M12,21a9,9,0,1,1,9-9A9,9,0,0,1,12,21ZM12,4.5A7.5,7.5,0,1,0,19.5,12,7.5,7.5,0,0,0,12,4.5Z" fill="currentColor" />
        <svg:path d="M15,12.75H12a.76.76,0,0,1-.75-.75V7a.75.75,0,0,1,1.5,0v4.25H15a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
    `
})
export class ClockIcon extends BaseIcon {}
