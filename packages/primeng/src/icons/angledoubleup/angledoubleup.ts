import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="angle-double-up"]',
    standalone: true,
    template: `
        <svg:path d="M15.5,11.75a.74.74,0,0,1-.53-.22l-3-3-3,3A.75.75,0,0,1,8,10.47L11.47,7a.75.75,0,0,1,1.06,0l3.5,3.5a.75.75,0,0,1,0,1.06A.74.74,0,0,1,15.5,11.75Z" fill="currentColor" />
        <svg:path d="M15.5,17.25A.74.74,0,0,1,15,17l-3-3L9,17A.75.75,0,0,1,8,16l3.5-3.5a.75.75,0,0,1,1.06,0L16,16A.75.75,0,0,1,16,17,.74.74,0,0,1,15.5,17.25Z" fill="currentColor" />
    `
})
export class AngleDoubleUpIcon extends BaseIcon {}
