import { FormField } from './form-field';
import { FormAction } from "./form-action";

export interface FormProperties {
  action: FormAction;
  fields: FormField[];
  submitButtonText: string;
}
