import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-empty-page',
    templateUrl: './empty-page.component.html',
    styleUrls: ['./empty-page.component.scss']
})
export class EmptyPageComponent {

    @Input() message = '';
    @Input() icon = '';

    constructor() { }
}
