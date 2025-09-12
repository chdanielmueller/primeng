import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="caret-down"]',
    standalone: true,
    template: ` <svg:path d="M12,16.75a.74.74,0,0,1-.6-.3l-6-8a.75.75,0,0,1-.07-.79A.76.76,0,0,1,6,7.25H18a.76.76,0,0,1,.67.41.75.75,0,0,1-.07.79l-6,8A.74.74,0,0,1,12,16.75Zm-4.5-8,4.5,6,4.5-6Z" fill="currentColor" /> `
})
export class CaretDownIcon extends BaseIcon {}
