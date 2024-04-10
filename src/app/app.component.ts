import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HrmanagementService } from '../app/service/hrmanagement.service';
import { DBoperation } from 'src/assets/Helpers/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HR-Management';
  employees: any[] = [];
  buttenText: string = 'Save'
  operation: DBoperation


  employeeForm: FormGroup = new FormGroup({})
  updateId:any=null;

  constructor(private _fb: FormBuilder, private HrmanagementService: HrmanagementService) { }

  ngOnInit() {
    this.setEmpForm();
    this.getEmploy()
  }
  setEmpForm() {
    this.buttenText = 'save';
    this.operation = DBoperation.create
    this.employeeForm = this._fb.group({
      Department: ['', Validators.required],
      Employ_Name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      Mobile: ['', [Validators.required, Validators.minLength(10)]],
      Gender: ['', Validators.required],
      Joining_Date: ['', Validators.required],
      Email: ['', Validators.required],
      salary: ['', Validators.required],
      password: ['', Validators.required],
      confirmPass: ['', Validators.required],
      empstatus: [false, Validators.requiredTrue],
    })
  }


  resetBtn() {
    this.employeeForm.reset()
    this.buttenText = 'save';
  }
  cancelBtn() {
    this.employeeForm.reset()
    this.buttenText = 'save';
  }

  edit(_id: any) {
    console.log("_id",_id);
    this.updateId = _id
    this.buttenText = 'Update';
    this.operation = DBoperation.update
    let empdata = this.employees.find((e: any) => {
      return e._id === _id;

    });
    console.log(empdata)
    this.employeeForm.patchValue(empdata)

  }

  formSubmit() {
    if (this.employeeForm.invalid) {
      return
    }
    if (this.operation == DBoperation.update) {
      alert("update")
      console.log()
      this.HrmanagementService.updateEmploy(this.employeeForm.value,this.updateId).subscribe((res) => {
        console.log(res);
        this.getEmploy()
        this.resetBtn();
      })
    }
    else if (this.operation == DBoperation.create) {
      alert('create')
      this.HrmanagementService.addEmploy(this.employeeForm.value).subscribe((res) => {
        console.log(res)
        this.getEmploy()
        this.resetBtn();
      })
    }

    // switch(this.operation){
    //   case DBoperation.create:
    //     this.HrmanagementService.addEmploy(this.employeeForm.value).subscribe((res)=>{
    //     console.log(res)
    //     this.getEmploy()
    //     this.resetBtn();    
    // })
    // break ;
    //   case DBoperation.update:
    //    this.HrmanagementService.updateEmploy(this.employeeForm.value).subscribe((res)=>{
    //    console.log(res);
    //    this.getEmploy()
    //     this.resetBtn(); 
    //   })
    //   break;
    // }

  }




  getEmploy() {
    this.HrmanagementService.getEmployeeData().subscribe(res => {
      this.employees = res.data;

    });
  }

  Delete(data) {
    console.log(data, "delete id ")
    this.HrmanagementService.deleteEmploy(data).subscribe((res) => {
      console.log(res)
      this.getEmploy();

    })
  }

}
