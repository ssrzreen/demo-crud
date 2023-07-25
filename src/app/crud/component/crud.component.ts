import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from "src/app/services/api.service";
import { DialogCrudComponent } from "./dialog-crud.component";

@Component({
   selector: "crud",
   templateUrl: "../templates/crud.component.html",
   styleUrls: ['../properties/crud.component.scss']
})
export class CrudComponent implements OnInit {
   displayedColumns: string[] = ['productName', 'category', 'price', 'Comment', 'date', 'freshness' , 'action'];
   dataSource !: MatTableDataSource<any>;

   @ViewChild(MatPaginator) paginator !: MatPaginator;
   @ViewChild(MatSort) sort !: MatSort;
   constructor(public dialog: MatDialog, private api: ApiService) {
   }
   ngOnInit(): void {
      this.getAllProducts();
   }
   openDialog() {
      this.dialog.open(DialogCrudComponent, {
         width: '30%'
      }).afterClosed().subscribe(val => {
         if(val == 'save'){
            this.getAllProducts();
         }
      })
   }
   getAllProducts() {
      this.api.getProduct()
         .subscribe({
            next: (res) => {
               this.dataSource = new MatTableDataSource(res);
               this.dataSource.paginator = this.paginator;
               this.dataSource.sort = this.sort
            }
         })
   }
   editProduct(row : any){
      this.dialog.open(DialogCrudComponent, {
         width: '30%' ,
         data:row
      }).afterClosed().subscribe(val => {
         if(val == 'update'){
            this.getAllProducts();
         }
      })
   }
   deleteProduct(id:number){
      this.api.deleteProduct(id)
      .subscribe({
         next:(res) => {
            alert("Product Deleted Successfully");
            this.getAllProducts();
         },
         error:() => {
            alert("Error while deleting the product")
         }
      })
   }
   applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
         this.dataSource.paginator.firstPage();
      }
   }
}
