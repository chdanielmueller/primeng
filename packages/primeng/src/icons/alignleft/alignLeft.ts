import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="align-left"]',
    standalone: true,
    template: `
        <svg:path d="M13.93,11h-10a.75.75,0,1,1,0-1.5h10a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
        <svg:path d="M20.07,7h-16a.75.75,0,0,1,0-1.5h16a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
        <svg:path d="M20.07,15h-16a.75.75,0,0,1,0-1.5h16a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
        <svg:path d="M13.93,19h-10a.75.75,0,1,1,0-1.5h10a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
    `
})
export class AlignLeftIcon extends BaseIcon {}
