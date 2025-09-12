import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="microsoft"]',
    standalone: true,
    template: ` <svg:path d="M4,4h7.5v7.5H4Zm8.5,0H20v7.5H12.5ZM4,12.5h7.5V20H4Zm8.5,0H20V20H12.5Z" fill="currentColor" /> `
})
export class MicrosoftIcon extends BaseIcon {}
