import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="sort-down"]',
    standalone: true,
    template: ` <svg:path d="M12,16.25a.74.74,0,0,1-.53-.22l-7-7A.75.75,0,0,1,5,7.75H19A.75.75,0,0,1,19.53,9l-7,7A.74.74,0,0,1,12,16.25Zm-5.19-7L12,14.44l5.19-5.19Z" fill="currentColor" /> `
})
export class SortDownIcon extends BaseIcon {}
