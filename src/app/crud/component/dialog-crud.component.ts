import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup,FormBuilder,Validators } from "@angular/forms";
import { ApiService } from "src/app/services/api.service";
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: "dialog-crud",
  templateUrl: "../templates/dialog-crud.component.html",
  styleUrls: ['../properties/dialog-crud.component.scss']
})
export class DialogCrudComponent implements OnInit{
    freshnessList = ["Brand new", "Second Hand" , "Refurbished"]
    productForm !: FormGroup;
    actionBtn : string = "save"
    constructor(private formBuilder : FormBuilder,
      private api : ApiService , 
      @Inject(MAT_DIALOG_DATA) public editData : any,
      private dialogRef : MatDialogRef<DialogCrudComponent>){}

    ngOnInit(): void {
        this.productForm = this.formBuilder.group({
          productName : ['' ,Validators.required],
          category : ['',Validators.required],
          freshness : ['',Validators.required],
          price: ['',Validators.required],
          Comment: ['', Validators.required],
          date : ['',Validators.required]
        })

        if(this.editData){
          this.actionBtn = "Update";
          this.productForm.controls['productName'].setValue(this.editData.productName);
          this.productForm.controls['category'].setValue(this.editData.category);
          this.productForm.controls['freshness'].setValue(this.editData.freshness);
          this.productForm.controls['price'].setValue(this.editData.price);
          this.productForm.controls['Comment'].setValue(this.editData.Comment);
          this.productForm.controls['date'].setValue(this.editData.date);
        }
    }
    addProduct(){
      if(!this.editData){
        if(this.productForm.valid){
          this.api.postProduct(this.productForm.value)
          .subscribe({
            next:(res) => {
              alert("product added successfully");
              this.productForm.reset();
              this.dialogRef.close('save');
            },
            error:() => {
              alert("Error while adding the product")
            }
          })
        }
      }else{
        this.updateProduct()
      }
    }
    updateProduct(){
      this.api.putProduct(this.productForm.value,this.editData.id)
      .subscribe({
        next:(res) => {
          alert("Product updated Successfully");
          this.productForm.reset();
          this.dialogRef.close('update');
        },
        error:() => {
          alert("Error while updating the recode");
        }
      })
    }
}