import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="sort-up"]',
    standalone: true,
    template: ` <svg:path d="M19,16.25H5a.74.74,0,0,1-.69-.46A.75.75,0,0,1,4.47,15l7-7a.75.75,0,0,1,1.06,0l7,7a.75.75,0,0,1,.16.82A.74.74,0,0,1,19,16.25ZM6.81,14.75H17.19L12,9.56Z" fill="currentColor" /> `
})
export class SortUpIcon extends BaseIcon {}
