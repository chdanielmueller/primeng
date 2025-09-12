import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="angle-double-down"]',
    standalone: true,
    template: `
        <svg:path d="M12,17.25a.74.74,0,0,1-.53-.22L8,13.53A.75.75,0,0,1,9,12.47l3,3,3-3A.75.75,0,0,1,16,13.53L12.53,17A.74.74,0,0,1,12,17.25Z" fill="currentColor" />
        <svg:path d="M12,11.75a.74.74,0,0,1-.53-.22L8,8A.75.75,0,0,1,9,7l3,3,3-3A.75.75,0,0,1,16,8l-3.5,3.5A.74.74,0,0,1,12,11.75Z" fill="currentColor" />
    `
})
export class AngleDoubleDownIcon extends BaseIcon {}
