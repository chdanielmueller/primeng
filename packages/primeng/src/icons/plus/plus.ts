import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="plus"]',
    standalone: true,
    template: ` <svg:path d="M12.75,11.25V5a.75.75,0,0,0-1.5,0v6.25H5a.75.75,0,0,0,0,1.5h6.25V19a.76.76,0,0,0,.75.75.75.75,0,0,0,.75-.75V12.75H19a.75.75,0,0,0,.75-.75.76.76,0,0,0-.75-.75Z" fill="currentColor" /> `
})
export class PlusIcon extends BaseIcon {}
