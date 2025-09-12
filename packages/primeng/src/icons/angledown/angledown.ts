import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="angle-down"]',
    standalone: true,
    template: ` <svg:path d="M12,14.5a.74.74,0,0,1-.53-.22L8,10.78A.75.75,0,0,1,9,9.72l3,3,3-3A.75.75,0,0,1,16,10.78l-3.5,3.5A.74.74,0,0,1,12,14.5Z" fill="currentColor" /> `
})
export class AngleDownIcon extends BaseIcon {}
