/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'markdown-edit'
})
@View({
    template: `
        <div><textarea #md (keyup)="convertInput(md.value)"></textarea></div>
        <div inner-html="{{ html }}"></div>
        <div><textarea>{{ rawHtml }}</textarea></div>
    `
})

class MyAppComponent {
    rawInput: string;
    html: string;
    rawHtml: string;

    constructor() {
        this.html = '';
        this.rawHtml = '';
    }

    convertInput(md: string) {
        this.html = marked(md);
        this.rawHtml = marked(md);
    }
}

bootstrap(MyAppComponent)
