import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="exclamation-circle"]',
    standalone: true,
    template: `
        <svg:path d="M12,21a9,9,0,1,1,9-9A9,9,0,0,1,12,21ZM12,4.5A7.5,7.5,0,1,0,19.5,12,7.5,7.5,0,0,0,12,4.5Z" fill="currentColor" />
        <svg:path d="M12,13a.76.76,0,0,1-.75-.75V8.75a.75.75,0,0,1,1.5,0v3.5A.76.76,0,0,1,12,13Z" fill="currentColor" />
        <svg:path d="M12,16a.76.76,0,0,1-.75-.75v-.5a.75.75,0,0,1,1.5,0v.5A.76.76,0,0,1,12,16Z" fill="currentColor" />
    `
})
export class ExclamationCircleIcon extends BaseIcon {}
