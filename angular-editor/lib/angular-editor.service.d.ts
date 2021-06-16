import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomClass } from './config';
import * as ɵngcc0 from '@angular/core';
export interface UploadResponse {
    imageUrl: string;
}
export declare class AngularEditorService {
    private http;
    private doc;
    savedSelection: Range | null;
    selectedText: string;
    uploadUrl: string;
    constructor(http: HttpClient, doc: any);
    /**
     * Executed command from editor header buttons exclude toggleEditorMode
     * @param command string from triggerCommand
     */
    executeCommand(command: string): void;
    /**
     * Create URL link
     * @param url string from UI prompt
     */
    createLink(url: string): void;
    /**
     * insert color either font or background
     *
     * @param color color to be inserted
     * @param where where the color has to be inserted either text/background
     */
    insertColor(color: string, where: string): void;
    /**
     * Set font name
     * @param fontName string
     */
    setFontName(fontName: string): void;
    /**
     * Set font size
     * @param fontSize string
     */
    setFontSize(fontSize: string): void;
    /**
     * Create raw HTML
     * @param html HTML string
     */
    insertHtml(html: string): void;
    /**
     * save selection when the editor is focussed out
     */
    saveSelection: () => void;
    /**
     * restore selection when the editor is focused in
     *
     * saved selection when the editor is focused out
     */
    restoreSelection(): boolean;
    /**
     * setTimeout used for execute 'saveSelection' method in next event loop iteration
     */
    executeInNextQueueIteration(callbackFn: (...args: any) => any, timeout?: number): void;
    /** check any selection is made or not */
    private checkSelection;
    /**
     * Upload file to uploadUrl
     * @param file The file
     */
    uploadImage(file: File): Observable<HttpEvent<UploadResponse>>;
    /**
     * Insert image with Url
     * @param imageUrl The imageUrl.
     */
    insertImage(imageUrl: string): void;
    setDefaultParagraphSeparator(separator: string): void;
    createCustomClass(customClass: CustomClass): void;
    insertVideo(videoUrl: string): void;
    private insertYouTubeVideoTag;
    private insertVimeoVideoTag;
    nextNode(node: any): any;
    getRangeSelectedNodes(range: any, includePartiallySelectedContainers: any): any[];
    getSelectedNodes(): any[];
    replaceWithOwnChildren(el: any): void;
    removeSelectedElements(tagNames: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AngularEditorService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<AngularEditorService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1lZGl0b3Iuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJhbmd1bGFyLWVkaXRvci5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4RUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXZlbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDdXN0b21DbGFzcyB9IGZyb20gJy4vY29uZmlnJztcbmV4cG9ydCBpbnRlcmZhY2UgVXBsb2FkUmVzcG9uc2Uge1xuICAgIGltYWdlVXJsOiBzdHJpbmc7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBbmd1bGFyRWRpdG9yU2VydmljZSB7XG4gICAgcHJpdmF0ZSBodHRwO1xuICAgIHByaXZhdGUgZG9jO1xuICAgIHNhdmVkU2VsZWN0aW9uOiBSYW5nZSB8IG51bGw7XG4gICAgc2VsZWN0ZWRUZXh0OiBzdHJpbmc7XG4gICAgdXBsb2FkVXJsOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cENsaWVudCwgZG9jOiBhbnkpO1xuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVkIGNvbW1hbmQgZnJvbSBlZGl0b3IgaGVhZGVyIGJ1dHRvbnMgZXhjbHVkZSB0b2dnbGVFZGl0b3JNb2RlXG4gICAgICogQHBhcmFtIGNvbW1hbmQgc3RyaW5nIGZyb20gdHJpZ2dlckNvbW1hbmRcbiAgICAgKi9cbiAgICBleGVjdXRlQ29tbWFuZChjb21tYW5kOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBVUkwgbGlua1xuICAgICAqIEBwYXJhbSB1cmwgc3RyaW5nIGZyb20gVUkgcHJvbXB0XG4gICAgICovXG4gICAgY3JlYXRlTGluayh1cmw6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogaW5zZXJ0IGNvbG9yIGVpdGhlciBmb250IG9yIGJhY2tncm91bmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb2xvciBjb2xvciB0byBiZSBpbnNlcnRlZFxuICAgICAqIEBwYXJhbSB3aGVyZSB3aGVyZSB0aGUgY29sb3IgaGFzIHRvIGJlIGluc2VydGVkIGVpdGhlciB0ZXh0L2JhY2tncm91bmRcbiAgICAgKi9cbiAgICBpbnNlcnRDb2xvcihjb2xvcjogc3RyaW5nLCB3aGVyZTogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBTZXQgZm9udCBuYW1lXG4gICAgICogQHBhcmFtIGZvbnROYW1lIHN0cmluZ1xuICAgICAqL1xuICAgIHNldEZvbnROYW1lKGZvbnROYW1lOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFNldCBmb250IHNpemVcbiAgICAgKiBAcGFyYW0gZm9udFNpemUgc3RyaW5nXG4gICAgICovXG4gICAgc2V0Rm9udFNpemUoZm9udFNpemU6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHJhdyBIVE1MXG4gICAgICogQHBhcmFtIGh0bWwgSFRNTCBzdHJpbmdcbiAgICAgKi9cbiAgICBpbnNlcnRIdG1sKGh0bWw6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogc2F2ZSBzZWxlY3Rpb24gd2hlbiB0aGUgZWRpdG9yIGlzIGZvY3Vzc2VkIG91dFxuICAgICAqL1xuICAgIHNhdmVTZWxlY3Rpb246ICgpID0+IHZvaWQ7XG4gICAgLyoqXG4gICAgICogcmVzdG9yZSBzZWxlY3Rpb24gd2hlbiB0aGUgZWRpdG9yIGlzIGZvY3VzZWQgaW5cbiAgICAgKlxuICAgICAqIHNhdmVkIHNlbGVjdGlvbiB3aGVuIHRoZSBlZGl0b3IgaXMgZm9jdXNlZCBvdXRcbiAgICAgKi9cbiAgICByZXN0b3JlU2VsZWN0aW9uKCk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogc2V0VGltZW91dCB1c2VkIGZvciBleGVjdXRlICdzYXZlU2VsZWN0aW9uJyBtZXRob2QgaW4gbmV4dCBldmVudCBsb29wIGl0ZXJhdGlvblxuICAgICAqL1xuICAgIGV4ZWN1dGVJbk5leHRRdWV1ZUl0ZXJhdGlvbihjYWxsYmFja0ZuOiAoLi4uYXJnczogYW55KSA9PiBhbnksIHRpbWVvdXQ/OiBudW1iZXIpOiB2b2lkO1xuICAgIC8qKiBjaGVjayBhbnkgc2VsZWN0aW9uIGlzIG1hZGUgb3Igbm90ICovXG4gICAgcHJpdmF0ZSBjaGVja1NlbGVjdGlvbjtcbiAgICAvKipcbiAgICAgKiBVcGxvYWQgZmlsZSB0byB1cGxvYWRVcmxcbiAgICAgKiBAcGFyYW0gZmlsZSBUaGUgZmlsZVxuICAgICAqL1xuICAgIHVwbG9hZEltYWdlKGZpbGU6IEZpbGUpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxVcGxvYWRSZXNwb25zZT4+O1xuICAgIC8qKlxuICAgICAqIEluc2VydCBpbWFnZSB3aXRoIFVybFxuICAgICAqIEBwYXJhbSBpbWFnZVVybCBUaGUgaW1hZ2VVcmwuXG4gICAgICovXG4gICAgaW5zZXJ0SW1hZ2UoaW1hZ2VVcmw6IHN0cmluZyk6IHZvaWQ7XG4gICAgc2V0RGVmYXVsdFBhcmFncmFwaFNlcGFyYXRvcihzZXBhcmF0b3I6IHN0cmluZyk6IHZvaWQ7XG4gICAgY3JlYXRlQ3VzdG9tQ2xhc3MoY3VzdG9tQ2xhc3M6IEN1c3RvbUNsYXNzKTogdm9pZDtcbiAgICBpbnNlcnRWaWRlbyh2aWRlb1VybDogc3RyaW5nKTogdm9pZDtcbiAgICBwcml2YXRlIGluc2VydFlvdVR1YmVWaWRlb1RhZztcbiAgICBwcml2YXRlIGluc2VydFZpbWVvVmlkZW9UYWc7XG4gICAgbmV4dE5vZGUobm9kZTogYW55KTogYW55O1xuICAgIGdldFJhbmdlU2VsZWN0ZWROb2RlcyhyYW5nZTogYW55LCBpbmNsdWRlUGFydGlhbGx5U2VsZWN0ZWRDb250YWluZXJzOiBhbnkpOiBhbnlbXTtcbiAgICBnZXRTZWxlY3RlZE5vZGVzKCk6IGFueVtdO1xuICAgIHJlcGxhY2VXaXRoT3duQ2hpbGRyZW4oZWw6IGFueSk6IHZvaWQ7XG4gICAgcmVtb3ZlU2VsZWN0ZWRFbGVtZW50cyh0YWdOYW1lczogYW55KTogdm9pZDtcbn1cbiJdfQ==