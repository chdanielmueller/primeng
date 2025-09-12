import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="code"]',
    standalone: true,
    template: `
        <svg:path d="M9.53,6.47a.75.75,0,0,0-1.06,0l-5,5a.75.75,0,0,0,0,1.06l5,5a.75.75,0,0,0,1.06,0,.75.75,0,0,0,0-1.06L5.06,12,9.53,7.53A.75.75,0,0,0,9.53,6.47Z" fill="currentColor" />
        <svg:path d="M20.53,11.47l-5-5a.75.75,0,0,0-1.06,1.06L18.94,12l-4.47,4.47a.75.75,0,0,0,0,1.06.75.75,0,0,0,1.06,0l5-5A.75.75,0,0,0,20.53,11.47Z" fill="currentColor" />
    `
})
export class CodeIcon extends BaseIcon {}
