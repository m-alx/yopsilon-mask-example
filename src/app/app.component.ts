import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as YN from 'yopsilon-mask';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    form!: FormGroup;

    ynDateSettings = new YN.MaskSettings('_', false);

    @ViewChild('startDateMask', { static: true, read: YN.MaskDateDirective }) 
    startDateMask!: YN.MaskDateDirective;

    @ViewChild('endDateMask', { static: true, read: YN.MaskDateDirective }) 
    endDateMask!: YN.MaskDateDirective;

    disableAll() {

        // startDateMask and endDateMask aren't undefined
        console.log(this.startDateMask);
        console.log(this.endDateMask);

        this.form.get('startDte')?.disable();
        this.form.get('endDte')?.disable();
    }

    enableAll() {
        this.form.get('startDte')?.enable();
        this.form.get('endDte')?.enable();
    }

    ngOnInit() {
        this.ynDateSettings.appendPlaceholders = true;

        this.form = this.formBuilder.group({
            startDte: [undefined, [Validators.required]],
            endDte: [undefined, [Validators.required]],
        });
    }

    constructor(private formBuilder: FormBuilder) { }        
}
