import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="arrow-down-right"]',
    standalone: true,
    template: ` <svg:path d="M17.7,8.46a.75.75,0,1,0-1.5,0v6.68L7.58,6.52A.75.75,0,0,0,6.52,7.58l8.62,8.62H8.46a.75.75,0,0,0,0,1.5H17a.75.75,0,0,0,.29-.06A.76.76,0,0,0,17.7,17Z" fill="currentColor" /> `
})
export class ArrowDownRightIcon extends BaseIcon {}
