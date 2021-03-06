import { Component, OnInit } from '@angular/core';
import { ContactMessageService } from '../../../service/contact-message.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InfMsg } from '../../../model/InfMsg';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {


  contactForm: FormGroup;
  activeSendButton: boolean = true;

  emailPattern: any = '^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$';
  phonePattern: any = '[0-9]{9}';


  infMsg: InfMsg;

  constructor(private contactMessageServer: ContactMessageService) {

    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(9), Validators.pattern(this.phonePattern)]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      message: new FormControl('', [Validators.required, Validators.minLength(10), , Validators.maxLength(100)]),
      politicalPrivacy: new FormControl('', [Validators.required]),
    });

  }

  ngOnInit(): void {
  }

  onResetForm() {
    this.contactForm.reset();
  }

  async onSaveForm() {
    if (this.contactForm.valid) {

      this.infMsg = await this.contactMessageServer.addMessaje(this.contactForm.value);

      if (this.infMsg.status == 'ERROR') {
        console.log('onSaveForm-> ', this.infMsg)
      }

      this.onResetForm();
      this.activeSendButton = true;

    } else {
      console.log('no valido');
    }
  }

  eventCheck(event) {
    if (event.target.checked && this.contactForm.valid) {
      this.activeSendButton = false;
    } else {
      this.activeSendButton = true;
    }
  }

  get name() { return this.contactForm.get('name'); }
  get phone() { return this.contactForm.get('phone'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }
  get politicalPrivacy() { return this.contactForm.get('politicalPrivacy'); }

}
