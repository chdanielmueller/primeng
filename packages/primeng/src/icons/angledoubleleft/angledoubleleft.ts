import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="angle-double-left"]',
    standalone: true,
    template: `
        <svg:path d="M11,16.25a.74.74,0,0,1-.53-.22L7,12.53a.75.75,0,0,1,0-1.06L10.47,8A.75.75,0,0,1,11.53,9l-3,3,3,3a.75.75,0,0,1,0,1.06A.74.74,0,0,1,11,16.25Z" fill="currentColor" />
        <svg:path d="M16.5,16.25A.74.74,0,0,1,16,16l-3.5-3.5a.75.75,0,0,1,0-1.06L16,8A.75.75,0,0,1,17,9l-3,3,3,3A.75.75,0,0,1,17,16,.74.74,0,0,1,16.5,16.25Z" fill="currentColor" />
    `
})
export class AngleDoubleLeftIcon extends BaseIcon {}
