import {Component, Input, OnInit} from '@angular/core';
import {UserDetailsData} from '../../../shared/services/github-api/dtos/user';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {

  @Input() userDetails: UserDetailsData;

  constructor() { }

  ngOnInit() {
  }

}
