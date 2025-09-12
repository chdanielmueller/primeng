import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="sort-down-fill"]',
    standalone: true,
    template: `
        <svg:path
            d="M5.00001 7.75C4.69666 7.75 4.42318 7.93273 4.3071 8.21299C4.19101 8.49324 4.25518 8.81583 4.46968 9.03033L11.4697 16.0303C11.7626 16.3232 12.2374 16.3232 12.5303 16.0303L19.5303 9.03033C19.7448 8.81583 19.809 8.49324 19.6929 8.21299C19.5768 7.93273 19.3034 7.75 19 7.75H5.00001Z"
            fill="currentColor"
        />
    `
})
export class SortDownFillIcon extends BaseIcon {}
