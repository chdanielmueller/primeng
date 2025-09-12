import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="building"]',
    standalone: true,
    template: ` <svg:path d="M18.25,19.25h-.5V4A.76.76,0,0,0,17,3.25H7A.76.76,0,0,0,6.25,4V19.25h-.5a.75.75,0,0,0,0,1.5h12.5a.75.75,0,0,0,0-1.5Zm-2,0H11V17a.5.5,0,0,0-.5-.5h-1A.5.5,0,0,0,9,17v2.25H7.75V4.75h8.5Z" fill="currentColor" /> `
})
export class BuildingIcon extends BaseIcon {}
