import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HrmanagementService {

  constructor(private http: HttpClient) { }

  getEmployeeData(): Observable<any> {
    return this.http.get('http://localhost:3000/api/v1/getAllData');
  }
 
  addEmploy(employeeForm:any): Observable<any>{
    console.log(employeeForm,"employeeForm")
    return this.http.post('http://localhost:3000/api/v1/createEmploy',employeeForm)
  }
 
  updateEmploy(data,id): Observable<any> { 
    console.log("id",id)
    return this.http.put(`http://localhost:3000/api/v1/updateTodo/${id}`,data)   
  }

  deleteEmploy(id: string): Observable<any> {
    const url = `http://localhost:3000/api/v1/deleteTodo/${id}`;
    return this.http.delete(url);
  }

}
