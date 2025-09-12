import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="arrow-up-left"]',
    standalone: true,
    template: ` <svg:path d="M6.3,15.54a.75.75,0,0,0,1.5,0V8.86l8.62,8.62a.75.75,0,1,0,1.06-1.06L8.86,7.8h6.68a.75.75,0,0,0,0-1.5H7.05a.75.75,0,0,0-.29.06.76.76,0,0,0-.46.69Z" fill="currentColor" /> `
})
export class ArrowUpLeftIcon extends BaseIcon {}
