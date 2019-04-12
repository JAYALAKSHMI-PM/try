import { Component, OnInit } from '@angular/core';
import{Details} from '../details';
@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.scss']
})
export class DetailsFormComponent 

  {
    credits = ['Visa', 'CreditCard'];

model = new Details(18, '0000','0000','0000', '0000','0000','0000',this.credits[0]);

submitted = false;

onSubmit() { this.submitted = true; }

// TODO: Remove this when we're done
get diagnostic() { return JSON.stringify(this.model); }


}

//////// NOT SHOWN IN DOCS ////////
