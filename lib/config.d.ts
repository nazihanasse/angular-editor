export interface CustomClass {
    name: string;
    class: string;
    tag?: string;
}
export interface Font {
    name: string;
    class: string;
}
export interface AngularEditorConfig {
    editable?: boolean;
    spellcheck?: boolean;
    height?: 'auto' | string;
    minHeight?: '0' | string;
    maxHeight?: 'auto' | string;
    width?: 'auto' | string;
    minWidth?: '0' | string;
    translate?: 'yes' | 'now' | string;
    enableToolbar?: boolean;
    showToolbar?: boolean;
    placeholder?: string;
    defaultParagraphSeparator?: string;
    defaultFontName?: string;
    defaultFontSize?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | string;
    uploadUrl?: string;
    fonts?: Font[];
    customClasses?: CustomClass[];
    sanitize?: boolean;
    toolbarPosition?: 'top' | 'bottom';
}
export declare const angularEditorConfig: AngularEditorConfig;
