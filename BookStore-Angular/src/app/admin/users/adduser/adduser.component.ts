import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/service/http-client.service';
import { Customer } from 'src/app/model/Customer';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  @Input()
  user: Customer 

  @Output()
  userAddedEvent = new EventEmitter();



  constructor(private httpClientService: HttpClientService,
    private router: Router) { }

  ngOnInit(): void {
  }
  addUser() {
    this.httpClientService.addUser(this.user).subscribe(
      (user) => {
        this.userAddedEvent.emit();
        this.router.navigate(['admin', 'users']);
      }
    );
  }

}
