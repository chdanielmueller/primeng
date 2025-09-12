import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="bars"]',
    standalone: true,
    template: `
        <svg:path d="M19,12.75H5a.75.75,0,0,1,0-1.5H19a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
        <svg:path d="M19,8.25H5a.75.75,0,0,1,0-1.5H19a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
        <svg:path d="M19,17.25H5a.75.75,0,0,1,0-1.5H19a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
    `
})
export class BarsIcon extends BaseIcon {}
