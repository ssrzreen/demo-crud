import { NgModule } from "@angular/core";
// import { CrudcrudComponent } from "./component/crud-crud.component";
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "../app-routing.module";
import { CrudComponent } from "./component/crud.component";
import { DialogCrudComponent } from "./component/dialog-crud.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        CrudComponent,
        DialogCrudComponent


    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        ReactiveFormsModule,
        FormsModule,
        MatTableModule,
        HttpClientModule,
        MatPaginatorModule,
        MatSortModule
    ],
    providers: [
    ]

})
export class CrudModule { }