import { Component } from '@angular/core';
import { BaseIcon } from 'primeng/icons/baseicon';

@Component({
    selector: '[data-p-icon="question"]',
    standalone: true,
    template: ` <svg:path d="M16.07,4.93A5.75,5.75,0,0,0,6.25,9a.75.75,0,0,0,1.5,0A4.26,4.26,0,1,1,12,13.25a.76.76,0,0,0-.75.75v2a.75.75,0,0,0,1.5,0V14.7a5.76,5.76,0,0,0,3.32-9.77Z" fill="currentColor" /> `
})
export class QuestionIcon extends BaseIcon {}
