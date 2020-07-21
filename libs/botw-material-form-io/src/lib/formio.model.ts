import {FormArray, FormControl} from '@angular/forms';

export class FormIoModel {
  autofocus?: boolean;
  tree?: boolean;
  input?: boolean;
  tableView?: boolean;
  inputType?: string;
  inputMask?: any;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  suffixIcon?: string;
  rows?: any;
  protected?: boolean;
  unique?: boolean;
  persistent?: boolean;
  clearOnHide?: boolean;
  spellcheck?: boolean;
  delimiter?: boolean;
  labelPosition?: string;
  addAnotherPosition?: any;
  requireDecimal?: boolean;
  tag?: string;
  attrs?: any;
  className?: string;
  defaultValue?: any;
  help?: string;
  breadcrumb?: string;
  hideLabel?: boolean;
  decimalLimit?: any;
  fieldSet?: boolean;
  optionsLabelPosition?: string;
  inline?: boolean;
  properties?: any;
  isNew?: boolean;
  refParty?: string;
  of?: string;
  dateFilter?: any;
  hidden?: boolean;
  wysiwyg?: any;
  type?: string;
  tags?: string[];
  owner?: string;
  components?: FormIoModel[];
  title?: string;
  htmlTitle?: string;
  dataSrc?: string;
  refreshOn?: string;
  filter?: string;
  authenticate?: boolean;
  data?: {
    url?: string;
    values?: any[];
    json?: string;
    resource?: string;
    custom?: string;
  };
  key?: string;
  validate?: {
    select?: boolean;
    required?: boolean;
    json?: any;
    minLength?: any;
    maxLength?: any;
    pattern?: string;
    custom?: any;
    min?: string;
    max?: string;
    step?: any;
    multiple?: any;
    integer?: any;
    customPrivate?: boolean;
    customMessage?: string;
  };
  label?: string;
  multiple?: boolean;
  calculatedValue?: any;
  valueProperty?: string;
  searchField?: string;
  leftIcon?: string;
  template?: string;
  rightIcon?: string;
  block?: boolean;
  action?: string;
  disableOnInvalid?: boolean;
  theme?: string;
  revisions?: string;
  labelProperty?: string;
  urlData?: any[];
  controller?: FormControl | FormArray;
  _id?: string;
  conditional?: {
    json?: any;
    show?: any;
    when?: any;
    eq?: any;
    pattern?: any;
  };
  customError?: string;
  size?: string;
  address?: {
    st2?: string[];
    city?: string[];
    state?: string[];
    country?: string[];
    postal?: string[]
  };
  _vid?: number;
  display?: string;
  name?: string;
  path?: string;
  project?: string;
  created?: string;
  modified?: string;
  machineName?: string;
  lockKey?: boolean;
  submissionAccess?: any;
  access?: any;
  dataGridLabel?: any;
  inDataGrid?: any;
  resource?: string;
  values?: any[];
  number?: number;
  value?: any;
  content?: string;
  tooltip?: string;
}
