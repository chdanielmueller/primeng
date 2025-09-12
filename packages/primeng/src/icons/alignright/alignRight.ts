import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="align-right"]',
    standalone: true,
    template: `
        <svg:path d="M20,10.75H10a.75.75,0,0,1,0-1.5H20a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
        <svg:path d="M20.07,6.75h-16a.75.75,0,0,1,0-1.5h16a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
        <svg:path d="M20.07,14.75h-16a.75.75,0,0,1,0-1.5h16a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
        <svg:path d="M20,18.75H10a.75.75,0,0,1,0-1.5H20a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
    `
})
export class AlignRightIcon extends BaseIcon {}
