import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="desktop"]',
    standalone: true,
    template: `
        <svg:path
            d="M19,16.75H5A1.76,1.76,0,0,1,3.25,15V5A1.76,1.76,0,0,1,5,3.25H19A1.76,1.76,0,0,1,20.75,5V15A1.76,1.76,0,0,1,19,16.75ZM5,4.75A.25.25,0,0,0,4.75,5V15a.25.25,0,0,0,.25.25H19a.25.25,0,0,0,.25-.25V5A.25.25,0,0,0,19,4.75Z"
            fill="currentColor"
        />
        <svg:path d="M15,20.75H12a.76.76,0,0,1-.75-.75V16a.75.75,0,0,1,1.5,0v3.25H15a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
        <svg:path d="M12,20.75H9a.75.75,0,0,1,0-1.5h3a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
    `
})
export class DesktopIcon extends BaseIcon {}
