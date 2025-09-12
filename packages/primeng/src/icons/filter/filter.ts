import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="filter"]',
    standalone: true,
    template: `
        <svg:path
            d="M14,20.5H10a.76.76,0,0,1-.75-.75V12L3.9,4.69a.73.73,0,0,1-.07-.78A.76.76,0,0,1,4.5,3.5h15a.76.76,0,0,1,.67.41.73.73,0,0,1-.07.78L14.75,12v7.75A.76.76,0,0,1,14,20.5ZM10.75,19h2.5V11.75a.71.71,0,0,1,.15-.44L18,5H6l4.62,6.31a.71.71,0,0,1,.15.44Z"
            fill="currentColor"
        />
    `
})
export class FilterIcon extends BaseIcon {}
