import { Directive, ElementRef, HostListener, OnChanges, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appAppElevation]'
})
export class AppElevationDirective implements OnChanges {

    constructor(private element: ElementRef,
                private renderer: Renderer2) {
        this.setElevation(2);
    }

    ngOnChanges(): void{
        this.setElevation(2);
    }

    @HostListener('mouseenter') onMouseEnter(): void {
        this.setElevation(8);
    }

    @HostListener('mouseleave') onMouseLeave(): void {
        this.setElevation(2);
    }

    setElevation(value: number): void {

        const classesToRemove = Array
            .from((this.element.nativeElement as HTMLElement).classList)
            .filter(c => c.startsWith('mat-elevation-z'));

        classesToRemove.forEach((c) => this.renderer.removeClass(this.element.nativeElement, c));

        const newClass = `mat-elevation-z${value}`;
        this.renderer.addClass(this.element.nativeElement, newClass);
    }

}
