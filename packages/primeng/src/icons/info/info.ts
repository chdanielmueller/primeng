import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="info"]',
    standalone: true,
    template: `
        <svg:path d="M12,17.75a.76.76,0,0,1-.75-.75V10a.75.75,0,0,1,1.5,0v7A.76.76,0,0,1,12,17.75Z" fill="currentColor" />
        <svg:path d="M12,8.25a.76.76,0,0,1-.75-.75V7a.75.75,0,0,1,1.5,0v.5A.76.76,0,0,1,12,8.25Z" fill="currentColor" />
    `
})
export class InfoIcon extends BaseIcon {}
