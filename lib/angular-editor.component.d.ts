import { AfterViewInit, ChangeDetectorRef, EventEmitter, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { AngularEditorConfig } from './config';
import { AngularEditorToolbarComponent } from './angular-editor-toolbar.component';
import { AngularEditorService } from './angular-editor.service';
import { DomSanitizer } from '@angular/platform-browser';
import * as ɵngcc0 from '@angular/core';
export declare class AngularEditorComponent implements OnInit, ControlValueAccessor, AfterViewInit, OnDestroy {
    private r;
    private editorService;
    private doc;
    private sanitizer;
    private cdRef;
    private autoFocus;
    private onChange;
    private onTouched;
    modeVisual: boolean;
    showPlaceholder: boolean;
    disabled: boolean;
    focused: boolean;
    focusInstance: any;
    blurInstance: any;
    private observer;
    id: string;
    config: AngularEditorConfig;
    placeholder: string;
    tabIndex: number | null;
    html: any;
    textArea: any;
    editorWrapper: any;
    editorToolbar: AngularEditorToolbarComponent;
    viewMode: EventEmitter<boolean>;
    /** emits `blur` event when focused out from the textarea */
    blurEvent: EventEmitter<FocusEvent>;
    /** emits `focus` event when focused in to the textarea */
    focusEvent: EventEmitter<FocusEvent>;
    tabindex: number;
    onFocus(): void;
    constructor(r: Renderer2, editorService: AngularEditorService, doc: any, sanitizer: DomSanitizer, cdRef: ChangeDetectorRef, defaultTabIndex: string, autoFocus: any);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    /**
     * Executed command from editor header buttons
     * @param command string from triggerCommand
     */
    executeCommand(command: string): void;
    /**
     * focus event
     */
    onTextAreaFocus(event: FocusEvent): void;
    /**
     * @description fires when cursor leaves textarea
     */
    onTextAreaMouseOut(event: MouseEvent): void;
    /**
     * blur event
     */
    onTextAreaBlur(event: FocusEvent): void;
    /**
     *  focus the text area when the editor is focused
     */
    focus(): void;
    /**
     * Executed from the contenteditable section while the input property changes
     * @param element html element from contenteditable
     */
    onContentChange(element: HTMLElement): void;
    /**
     * Set the function to be called
     * when the control receives a change event.
     *
     * @param fn a function
     */
    registerOnChange(fn: any): void;
    /**
     * Set the function to be called
     * when the control receives a touch event.
     *
     * @param fn a function
     */
    registerOnTouched(fn: any): void;
    /**
     * Write a new value to the element.
     *
     * @param value value to be executed when there is a change in contenteditable
     */
    writeValue(value: any): void;
    /**
     * refresh view/HTML of the editor
     *
     * @param value html string from the editor
     */
    refreshView(value: string): void;
    /**
     * toggles placeholder based on input string
     *
     * @param value A HTML string from the editor
     */
    togglePlaceholder(value: boolean): void;
    /**
     * Implements disabled state for this element
     *
     * @param isDisabled Disabled flag
     */
    setDisabledState(isDisabled: boolean): void;
    /**
     * toggles editor mode based on bToSource bool
     *
     * @param bToSource A boolean value from the editor
     */
    toggleEditorMode(bToSource: boolean): void;
    /**
     * toggles editor buttons when cursor moved or positioning
     *
     * Send a node array from the contentEditable of the editor
     */
    exec(): void;
    private configure;
    getCustomTags(): string;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AngularEditorComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AngularEditorComponent, "angular-editor", never, {
    "id": "id";
    "config": "config";
    "placeholder": "placeholder";
    "tabIndex": "tabIndex";
}, {
    "viewMode": "viewMode";
    "blurEvent": "blur";
    "focusEvent": "focus";
    "html": "html";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1lZGl0b3IuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImFuZ3VsYXItZWRpdG9yLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUhBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBbmd1bGFyRWRpdG9yQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgQW5ndWxhckVkaXRvclRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL2FuZ3VsYXItZWRpdG9yLXRvb2xiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IEFuZ3VsYXJFZGl0b3JTZXJ2aWNlIH0gZnJvbSAnLi9hbmd1bGFyLWVkaXRvci5zZXJ2aWNlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQW5ndWxhckVkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSByO1xuICAgIHByaXZhdGUgZWRpdG9yU2VydmljZTtcbiAgICBwcml2YXRlIGRvYztcbiAgICBwcml2YXRlIHNhbml0aXplcjtcbiAgICBwcml2YXRlIGNkUmVmO1xuICAgIHByaXZhdGUgYXV0b0ZvY3VzO1xuICAgIHByaXZhdGUgb25DaGFuZ2U7XG4gICAgcHJpdmF0ZSBvblRvdWNoZWQ7XG4gICAgbW9kZVZpc3VhbDogYm9vbGVhbjtcbiAgICBzaG93UGxhY2Vob2xkZXI6IGJvb2xlYW47XG4gICAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgZm9jdXNlZDogYm9vbGVhbjtcbiAgICBmb2N1c0luc3RhbmNlOiBhbnk7XG4gICAgYmx1ckluc3RhbmNlOiBhbnk7XG4gICAgcHJpdmF0ZSBvYnNlcnZlcjtcbiAgICBpZDogc3RyaW5nO1xuICAgIGNvbmZpZzogQW5ndWxhckVkaXRvckNvbmZpZztcbiAgICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICAgIHRhYkluZGV4OiBudW1iZXIgfCBudWxsO1xuICAgIGh0bWw6IGFueTtcbiAgICB0ZXh0QXJlYTogYW55O1xuICAgIGVkaXRvcldyYXBwZXI6IGFueTtcbiAgICBlZGl0b3JUb29sYmFyOiBBbmd1bGFyRWRpdG9yVG9vbGJhckNvbXBvbmVudDtcbiAgICB2aWV3TW9kZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuICAgIC8qKiBlbWl0cyBgYmx1cmAgZXZlbnQgd2hlbiBmb2N1c2VkIG91dCBmcm9tIHRoZSB0ZXh0YXJlYSAqL1xuICAgIGJsdXJFdmVudDogRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+O1xuICAgIC8qKiBlbWl0cyBgZm9jdXNgIGV2ZW50IHdoZW4gZm9jdXNlZCBpbiB0byB0aGUgdGV4dGFyZWEgKi9cbiAgICBmb2N1c0V2ZW50OiBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD47XG4gICAgdGFiaW5kZXg6IG51bWJlcjtcbiAgICBvbkZvY3VzKCk6IHZvaWQ7XG4gICAgY29uc3RydWN0b3IocjogUmVuZGVyZXIyLCBlZGl0b3JTZXJ2aWNlOiBBbmd1bGFyRWRpdG9yU2VydmljZSwgZG9jOiBhbnksIHNhbml0aXplcjogRG9tU2FuaXRpemVyLCBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIGRlZmF1bHRUYWJJbmRleDogc3RyaW5nLCBhdXRvRm9jdXM6IGFueSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBFeGVjdXRlZCBjb21tYW5kIGZyb20gZWRpdG9yIGhlYWRlciBidXR0b25zXG4gICAgICogQHBhcmFtIGNvbW1hbmQgc3RyaW5nIGZyb20gdHJpZ2dlckNvbW1hbmRcbiAgICAgKi9cbiAgICBleGVjdXRlQ29tbWFuZChjb21tYW5kOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIGZvY3VzIGV2ZW50XG4gICAgICovXG4gICAgb25UZXh0QXJlYUZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24gZmlyZXMgd2hlbiBjdXJzb3IgbGVhdmVzIHRleHRhcmVhXG4gICAgICovXG4gICAgb25UZXh0QXJlYU1vdXNlT3V0KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBibHVyIGV2ZW50XG4gICAgICovXG4gICAgb25UZXh0QXJlYUJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqICBmb2N1cyB0aGUgdGV4dCBhcmVhIHdoZW4gdGhlIGVkaXRvciBpcyBmb2N1c2VkXG4gICAgICovXG4gICAgZm9jdXMoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBFeGVjdXRlZCBmcm9tIHRoZSBjb250ZW50ZWRpdGFibGUgc2VjdGlvbiB3aGlsZSB0aGUgaW5wdXQgcHJvcGVydHkgY2hhbmdlc1xuICAgICAqIEBwYXJhbSBlbGVtZW50IGh0bWwgZWxlbWVudCBmcm9tIGNvbnRlbnRlZGl0YWJsZVxuICAgICAqL1xuICAgIG9uQ29udGVudENoYW5nZShlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWRcbiAgICAgKiB3aGVuIHRoZSBjb250cm9sIHJlY2VpdmVzIGEgY2hhbmdlIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIGZuIGEgZnVuY3Rpb25cbiAgICAgKi9cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFNldCB0aGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkXG4gICAgICogd2hlbiB0aGUgY29udHJvbCByZWNlaXZlcyBhIHRvdWNoIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIGZuIGEgZnVuY3Rpb25cbiAgICAgKi9cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBXcml0ZSBhIG5ldyB2YWx1ZSB0byB0aGUgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZSB2YWx1ZSB0byBiZSBleGVjdXRlZCB3aGVuIHRoZXJlIGlzIGEgY2hhbmdlIGluIGNvbnRlbnRlZGl0YWJsZVxuICAgICAqL1xuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogcmVmcmVzaCB2aWV3L0hUTUwgb2YgdGhlIGVkaXRvclxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlIGh0bWwgc3RyaW5nIGZyb20gdGhlIGVkaXRvclxuICAgICAqL1xuICAgIHJlZnJlc2hWaWV3KHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIHRvZ2dsZXMgcGxhY2Vob2xkZXIgYmFzZWQgb24gaW5wdXQgc3RyaW5nXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWUgQSBIVE1MIHN0cmluZyBmcm9tIHRoZSBlZGl0b3JcbiAgICAgKi9cbiAgICB0b2dnbGVQbGFjZWhvbGRlcih2YWx1ZTogYm9vbGVhbik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogSW1wbGVtZW50cyBkaXNhYmxlZCBzdGF0ZSBmb3IgdGhpcyBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gaXNEaXNhYmxlZCBEaXNhYmxlZCBmbGFnXG4gICAgICovXG4gICAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiB0b2dnbGVzIGVkaXRvciBtb2RlIGJhc2VkIG9uIGJUb1NvdXJjZSBib29sXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYlRvU291cmNlIEEgYm9vbGVhbiB2YWx1ZSBmcm9tIHRoZSBlZGl0b3JcbiAgICAgKi9cbiAgICB0b2dnbGVFZGl0b3JNb2RlKGJUb1NvdXJjZTogYm9vbGVhbik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogdG9nZ2xlcyBlZGl0b3IgYnV0dG9ucyB3aGVuIGN1cnNvciBtb3ZlZCBvciBwb3NpdGlvbmluZ1xuICAgICAqXG4gICAgICogU2VuZCBhIG5vZGUgYXJyYXkgZnJvbSB0aGUgY29udGVudEVkaXRhYmxlIG9mIHRoZSBlZGl0b3JcbiAgICAgKi9cbiAgICBleGVjKCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBjb25maWd1cmU7XG4gICAgZ2V0Q3VzdG9tVGFncygpOiBzdHJpbmc7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==