import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="align-center"]',
    standalone: true,
    template: `
        <svg:path d="M17,10.75H7a.75.75,0,0,1,0-1.5H17a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
        <svg:path d="M20,6.75H4a.75.75,0,0,1,0-1.5H20a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
        <svg:path d="M20,14.75H4a.75.75,0,0,1,0-1.5H20a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
        <svg:path d="M17,18.75H7a.75.75,0,0,1,0-1.5H17a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
    `
})
export class AlignCenterIcon extends BaseIcon {}
