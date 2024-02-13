import { Component, Input } from '@angular/core';
import { FormProperties } from 'src/app/components/form/form-properties';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { NgForOf, NgSwitch, NgSwitchCase } from '@angular/common';
import { FormAction } from './form-action';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/env/environment';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [NgSwitch, NgForOf, NgSwitchCase],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  @Input() properties?: FormProperties;
  constructor(private http: HttpClient) { }
  public submit(e: Event) {
    switch (this.properties?.action) {
      case FormAction.email:
        this.sendEmail(e);
        break;
      default:
        // console.log('unhandled submit event');
        alert('Unhandled Submit Event: ' + this.properties?.action);
        break;
    }
  }

  private sendEmail(e: Event) {
    e.preventDefault();
    emailjs
      .sendForm(
        environment.emailjs.serviceId,
        environment.emailjs.templateIds.find(t => t.name == '')?.templateId ?? '',
        e.target as HTMLFormElement,
        environment.emailjs.publicKey
      )
      .then(
        (result: EmailJSResponseStatus) => {
          // console.log(result.text);
        },
        (error) => {
          // console.log(error.text);
        },
      );
  }
}
