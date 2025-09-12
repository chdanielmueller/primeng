import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="plus-circle"]',
    standalone: true,
    template: `
        <svg:path d="M12,21a9,9,0,1,1,9-9A9,9,0,0,1,12,21ZM12,4.5A7.5,7.5,0,1,0,19.5,12,7.5,7.5,0,0,0,12,4.5Z" fill="currentColor" />
        <svg:path d="M12,16.75a.76.76,0,0,1-.75-.75V8a.75.75,0,0,1,1.5,0v8A.76.76,0,0,1,12,16.75Z" fill="currentColor" />
        <svg:path d="M16,12.75H8a.75.75,0,0,1,0-1.5h8a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
    `
})
export class PlusCircleIcon extends BaseIcon {}
