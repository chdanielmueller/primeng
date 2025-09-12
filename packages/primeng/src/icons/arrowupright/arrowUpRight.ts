import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="arrow-up-right"]',
    standalone: true,
    template: ` <svg:path d="M8.46,6.3a.75.75,0,1,0,0,1.5h6.68L6.52,16.42a.75.75,0,1,0,1.06,1.06L16.2,8.86v6.68a.75.75,0,0,0,1.5,0V7.05a.75.75,0,0,0-.06-.29A.76.76,0,0,0,17,6.3Z" fill="currentColor" /> `
})
export class ArrowUpRightIcon extends BaseIcon {}
