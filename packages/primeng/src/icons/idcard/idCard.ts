import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="id-card"]',
    standalone: true,
    template: `
        <svg:path
            d="M19,18.75H5A1.76,1.76,0,0,1,3.25,17V7A1.76,1.76,0,0,1,5,5.25H19A1.76,1.76,0,0,1,20.75,7V17A1.76,1.76,0,0,1,19,18.75ZM5,6.75A.25.25,0,0,0,4.75,7V17a.25.25,0,0,0,.25.25H19a.25.25,0,0,0,.25-.25V7A.25.25,0,0,0,19,6.75Z"
            fill="currentColor"
        />
        <svg:path d="M9,11.75a2,2,0,1,1,2-2A2,2,0,0,1,9,11.75Zm0-2.5a.5.5,0,1,0,.5.5A.5.5,0,0,0,9,9.25Z" fill="currentColor" />
        <svg:path d="M12,15.75a.76.76,0,0,1-.75-.75c0-.68-.17-1.25-2.25-1.25S6.75,14.32,6.75,15a.75.75,0,0,1-1.5,0c0-2.75,2.82-2.75,3.75-2.75s3.75,0,3.75,2.75A.76.76,0,0,1,12,15.75Z" fill="currentColor" />
        <svg:path d="M17,10.75H14a.75.75,0,0,1,0-1.5h3a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
        <svg:path d="M16,13.75H14a.75.75,0,0,1,0-1.5h2a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
    `
})
export class IdCardIcon extends BaseIcon {}
