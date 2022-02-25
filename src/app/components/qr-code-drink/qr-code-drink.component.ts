import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-qr-code-drink',
    templateUrl: './qr-code-drink.component.html',
    styleUrls: ['./qr-code-drink.component.scss']
})
export class QrCodeDrinkComponent implements OnInit {

    qrdata: string;

    constructor(private dialogRef: MatDialogRef<QrCodeDrinkComponent>,
                @Inject(MAT_DIALOG_DATA) data: any) {

        this.qrdata = `${location.origin}/detail/${data.idDrink}`;
    }

    ngOnInit(): void {
    }

    close(): void {
        this.dialogRef.close();
    }

}
