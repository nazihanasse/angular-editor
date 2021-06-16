import { ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { AngularEditorService } from './angular-editor.service';
import { CustomClass, Font } from './config';
import * as ɵngcc0 from '@angular/core';
export declare class AngularEditorToolbarComponent {
    private r;
    private editorService;
    private doc;
    id: string;
    htmlMode: boolean;
    showToolbar: boolean;
    linkSelected: boolean;
    block: string;
    defaultFontId: any;
    fontName: any;
    fontSize: string;
    foreColour: any;
    backColor: any;
    fonts: Font[];
    customClassId: number;
    customClasses: CustomClass[];
    uploadUrl: string;
    tagMap: {
        BLOCKQUOTE: string;
        A: string;
    };
    select: string[];
    buttons: string[];
    execute: EventEmitter<string>;
    myInputFile: ElementRef;
    readonly isLinkButtonDisabled: boolean;
    constructor(r: Renderer2, editorService: AngularEditorService, doc: any);
    /**
     * Trigger command from editor header buttons
     * @param command string from toolbar buttons
     */
    triggerCommand(command: string): void;
    /**
     * highlight editor buttons when cursor moved or positioning
     */
    triggerButtons(): void;
    /**
     * trigger highlight editor buttons when cursor moved or positioning in block
     */
    triggerBlocks(nodes: Node[]): void;
    /**
     * insert URL link
     */
    insertUrl(): void;
    /**
     * insert Video link
     */
    insertVideo(): void;
    /** insert color */
    insertColor(color: string, where: string): void;
    /**
     * set font Name/family
     * @param foreColor string
     */
    setFontName(foreColor: string): void;
    /**
     * set font Size
     * @param fontSize string
     */
    setFontSize(fontSize: string): void;
    /**
     * toggle editor mode (WYSIWYG or SOURCE)
     * @param m boolean
     */
    setEditorMode(m: boolean): void;
    /**
     * Upload image when file is selected
     */
    onFileChanged(event: any): void;
    /**
     * Reset Input
     */
    fileReset(): void;
    /**
     * Set custom class
     */
    setCustomClass(classId: number): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AngularEditorToolbarComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AngularEditorToolbarComponent, "angular-editor-toolbar", never, {}, {
    "execute": "execute";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1lZGl0b3ItdG9vbGJhci5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiYW5ndWxhci1lZGl0b3ItdG9vbGJhci5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuZ3VsYXJFZGl0b3JTZXJ2aWNlIH0gZnJvbSAnLi9hbmd1bGFyLWVkaXRvci5zZXJ2aWNlJztcbmltcG9ydCB7IEN1c3RvbUNsYXNzLCBGb250IH0gZnJvbSAnLi9jb25maWcnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQW5ndWxhckVkaXRvclRvb2xiYXJDb21wb25lbnQge1xuICAgIHByaXZhdGUgcjtcbiAgICBwcml2YXRlIGVkaXRvclNlcnZpY2U7XG4gICAgcHJpdmF0ZSBkb2M7XG4gICAgaWQ6IHN0cmluZztcbiAgICBodG1sTW9kZTogYm9vbGVhbjtcbiAgICBzaG93VG9vbGJhcjogYm9vbGVhbjtcbiAgICBsaW5rU2VsZWN0ZWQ6IGJvb2xlYW47XG4gICAgYmxvY2s6IHN0cmluZztcbiAgICBkZWZhdWx0Rm9udElkOiBhbnk7XG4gICAgZm9udE5hbWU6IGFueTtcbiAgICBmb250U2l6ZTogc3RyaW5nO1xuICAgIGZvcmVDb2xvdXI6IGFueTtcbiAgICBiYWNrQ29sb3I6IGFueTtcbiAgICBmb250czogRm9udFtdO1xuICAgIGN1c3RvbUNsYXNzSWQ6IG51bWJlcjtcbiAgICBjdXN0b21DbGFzc2VzOiBDdXN0b21DbGFzc1tdO1xuICAgIHVwbG9hZFVybDogc3RyaW5nO1xuICAgIHRhZ01hcDoge1xuICAgICAgICBCTE9DS1FVT1RFOiBzdHJpbmc7XG4gICAgICAgIEE6IHN0cmluZztcbiAgICB9O1xuICAgIHNlbGVjdDogc3RyaW5nW107XG4gICAgYnV0dG9uczogc3RyaW5nW107XG4gICAgZXhlY3V0ZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XG4gICAgbXlJbnB1dEZpbGU6IEVsZW1lbnRSZWY7XG4gICAgcmVhZG9ubHkgaXNMaW5rQnV0dG9uRGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3IocjogUmVuZGVyZXIyLCBlZGl0b3JTZXJ2aWNlOiBBbmd1bGFyRWRpdG9yU2VydmljZSwgZG9jOiBhbnkpO1xuICAgIC8qKlxuICAgICAqIFRyaWdnZXIgY29tbWFuZCBmcm9tIGVkaXRvciBoZWFkZXIgYnV0dG9uc1xuICAgICAqIEBwYXJhbSBjb21tYW5kIHN0cmluZyBmcm9tIHRvb2xiYXIgYnV0dG9uc1xuICAgICAqL1xuICAgIHRyaWdnZXJDb21tYW5kKGNvbW1hbmQ6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogaGlnaGxpZ2h0IGVkaXRvciBidXR0b25zIHdoZW4gY3Vyc29yIG1vdmVkIG9yIHBvc2l0aW9uaW5nXG4gICAgICovXG4gICAgdHJpZ2dlckJ1dHRvbnMoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiB0cmlnZ2VyIGhpZ2hsaWdodCBlZGl0b3IgYnV0dG9ucyB3aGVuIGN1cnNvciBtb3ZlZCBvciBwb3NpdGlvbmluZyBpbiBibG9ja1xuICAgICAqL1xuICAgIHRyaWdnZXJCbG9ja3Mobm9kZXM6IE5vZGVbXSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogaW5zZXJ0IFVSTCBsaW5rXG4gICAgICovXG4gICAgaW5zZXJ0VXJsKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogaW5zZXJ0IFZpZGVvIGxpbmtcbiAgICAgKi9cbiAgICBpbnNlcnRWaWRlbygpOiB2b2lkO1xuICAgIC8qKiBpbnNlcnQgY29sb3IgKi9cbiAgICBpbnNlcnRDb2xvcihjb2xvcjogc3RyaW5nLCB3aGVyZTogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBzZXQgZm9udCBOYW1lL2ZhbWlseVxuICAgICAqIEBwYXJhbSBmb3JlQ29sb3Igc3RyaW5nXG4gICAgICovXG4gICAgc2V0Rm9udE5hbWUoZm9yZUNvbG9yOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIHNldCBmb250IFNpemVcbiAgICAgKiBAcGFyYW0gZm9udFNpemUgc3RyaW5nXG4gICAgICovXG4gICAgc2V0Rm9udFNpemUoZm9udFNpemU6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogdG9nZ2xlIGVkaXRvciBtb2RlIChXWVNJV1lHIG9yIFNPVVJDRSlcbiAgICAgKiBAcGFyYW0gbSBib29sZWFuXG4gICAgICovXG4gICAgc2V0RWRpdG9yTW9kZShtOiBib29sZWFuKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBVcGxvYWQgaW1hZ2Ugd2hlbiBmaWxlIGlzIHNlbGVjdGVkXG4gICAgICovXG4gICAgb25GaWxlQ2hhbmdlZChldmVudDogYW55KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXNldCBJbnB1dFxuICAgICAqL1xuICAgIGZpbGVSZXNldCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFNldCBjdXN0b20gY2xhc3NcbiAgICAgKi9cbiAgICBzZXRDdXN0b21DbGFzcyhjbGFzc0lkOiBudW1iZXIpOiB2b2lkO1xufVxuIl19