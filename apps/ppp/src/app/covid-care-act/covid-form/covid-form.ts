// tslint:disable-next-line:nx-enforce-module-boundaries
import {FormIoModel} from "../../../../../../libs/botw-material-form-io/src/lib/formio.model";

//|^[1-9][0-9,]{1}.[0-9]{1,2}$ - Add fractions

export const covidForm: FormIoModel = {
  "type": "form",
  "tags": [
    "common"
  ],
  "owner": "59cee28f0b540200077b5801",
  "components": [
    {
      "clearOnHide": false,
      "key": "panel",
      "input": false,
      "title": "Applicant Information",
      "theme": "default",
      "tableView": false,
      "components": [
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "label": "Business Type",
          "key": "qid1",
          "placeholder": "",
          "data": {
            "values": [
              {
                "value": "soleProprietor",
                "label": "Sole proprietor"
              },
              {
                "value": "partnership",
                "label": "Partnership"
              },
              {
                "value": "cCorp",
                "label": "C-Corp"
              },
              {
                "value": "sCorp",
                "label": "S-Corp"
              },
              {
                "value": "llc",
                "label": "LLC"
              },
              {
                "value": "independentContractor",
                "label": "Independent contractor"
              },
              {
                "value": "eligibleSelfEmployedIndividual",
                "label": "Eligible self-employed individual"
              },
              {
                "value": "501C3Nonprofit",
                "label": "501(c)(3) nonprofit"
              },
              {
                "value": "501C19VeteransOrganization",
                "label": "501(c)(19) veterans organization"
              },
              {
                "value": "tribalBusinessSec31B2COfSmallBusinessAct",
                "label": "Tribal business (sec. 31(b)(2)(C) of Small Business Act)"
              },
              {
                "value": "other",
                "label": "Other"
              }
            ],
            "json": "",
            "url": "",
            "resource": "",
            "custom": ""
          },
          "dataSrc": "values",
          "valueProperty": "value",
          "defaultValue": "",
          "refreshOn": "",
          "filter": "",
          "authenticate": false,
          "template": "<span>{{ item.label }}</span>",
          "multiple": false,
          "protected": false,
          "unique": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "validate": {
            "required": true
          },
          "type": "select",
          "labelPosition": "top",
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "properties": {},
          "lockKey": true
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "inputType": "text",
          "inputMask": "",
          "label": "Business Legal Name",
          "key": "qid3",
          "placeholder": "",
          "prefix": "",
          "suffix": "",
          "multiple": false,
          "defaultValue": "",
          "protected": false,
          "unique": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "spellcheck": true,
          "validate": {
            "required": true,
            "minLength": "",
            "maxLength": "",
            "pattern": "",
            "custom": "",
            "customPrivate": false
          },
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "type": "textfield",
          "labelPosition": "top",
          "tags": [],
          "properties": {
            "xpath": "PartyInfo/OrgKycInfo/OrgName/LegalName"
          },
          "lockKey": true
        },
        {
          "autofocus": false,
          "input": true,
          "tree": true,
          "components": [
            {
              "autofocus": false,
              "input": true,
              "tableView": true,
              "inputType": "text",
              "inputMask": "",
              "label": "DBA or Tradename (if applicable)",
              "key": "qid4",
              "placeholder": "",
              "prefix": "",
              "suffix": "",
              "multiple": false,
              "defaultValue": "",
              "protected": false,
              "unique": false,
              "persistent": true,
              "hidden": false,
              "clearOnHide": true,
              "spellcheck": true,
              "validate": {
                "required": false,
                "minLength": "",
                "maxLength": "",
                "pattern": "",
                "custom": "",
                "customPrivate": false
              },
              "conditional": {
                "show": "",
                "when": null,
                "eq": ""
              },
              "type": "textfield",
              "labelPosition": "top",
              "tags": [],
              "properties": {
                "xpath": "PartyInfo/OrgKycInfo/OrgName/DBAName[#n]"
              },
              "lockKey": true,
              "inDataGrid": true
            }
          ],
          "tableView": true,
          "label": "",
          "key": "panelDbaNames",
          "protected": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "type": "datagrid",
          "addAnotherPosition": "bottom",
          "tags": [],
          "validate": {
            maxLength: 1
          },
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "properties": {}
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "inputType": "text",
          "inputMask": "",
          "label": "Business TIN (EIN, SSN)",
          "key": "qid5",
          "placeholder": "",
          "prefix": "",
          "suffix": "",
          "multiple": false,
          "defaultValue": "",
          "help": "",
          "protected": false,
          "unique": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "spellcheck": true,
          "validate": {
            "required": true,
            "minLength": "",
            "maxLength": "",
            "pattern": "(?:\\d{3}-\\d{2}-\\d{4}|\\d{2}-\\d{7})",
            "custom": "",
            "customPrivate": false,
            "customMessage": "Must match XX-XXXXXXX or XXX-XX-XXXX"
          },
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "type": "textfield",
          "labelPosition": "top",
          "tags": [],
          "properties": {
            "xpath": "PartyInfo/TaxIdentification/TaxIdentValue"
          },
          "lockKey": true
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "inputType": "text",
          "inputMask": "",
          "label": "Business Primary Address",
          "key": "qid6",
          "placeholder": "",
          "prefix": "",
          "suffix": "",
          "multiple": false,
          "defaultValue": "",
          "protected": false,
          "unique": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "spellcheck": true,
          "validate": {
            "required": true,
            "minLength": "",
            "maxLength": "",
            "pattern": "",
            "custom": "",
            "customPrivate": false
          },
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "type": "textfield",
          "labelPosition": "top",
          "tags": [],
          "properties": {
            "xpath": "Legal/PostAddr1/Addr1"
          },
          "lockKey": true
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "inputType": "text",
          "inputMask": "",
          "label": "City",
          "key": "qid7",
          "placeholder": "",
          "prefix": "",
          "suffix": "",
          "multiple": false,
          "defaultValue": "",
          "protected": false,
          "unique": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "spellcheck": true,
          "validate": {
            "required": true,
            "minLength": "",
            "maxLength": "",
            "pattern": "",
            "custom": "",
            "customPrivate": false
          },
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "type": "textfield",
          "labelPosition": "top",
          "tags": [],
          "properties": {
            "xpath": "Legal/PostAddr1/City"
          },
          "lockKey": true
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "inputType": "text",
          "inputMask": "",
          "label": "State",
          "key": "qid8",
          "placeholder": "",
          "prefix": "",
          "suffix": "",
          "multiple": false,
          "defaultValue": "",
          "protected": false,
          "unique": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "spellcheck": true,
          "validate": {
            "required": true,
            "minLength": "",
            "maxLength": "",
            "pattern": "",
            "custom": "",
            "customPrivate": false
          },
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "type": "textfield",
          "labelPosition": "top",
          "tags": [],
          "properties": {
            "xpath": "Legal/PostAddr1/StateProv"
          },
          "lockKey": true
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "inputType": "text",
          "inputMask": "99999",
          "label": "Postal Code",
          "key": "qid9",
          "placeholder": "",
          "prefix": "",
          "suffix": "",
          "multiple": false,
          "defaultValue": "",
          "protected": false,
          "unique": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "spellcheck": true,
          "validate": {
            "required": true,
            "minLength": "5",
            "maxLength": "",
            "pattern": "",
            "custom": "",
            "customPrivate": false
          },
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "type": "textfield",
          "labelPosition": "top",
          "tags": [],
          "properties": {},
          "lockKey": true
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "inputType": "text",
          "inputMask": "",
          "label": "Country",
          "key": "qid10",
          "placeholder": "",
          "prefix": "",
          "suffix": "",
          "multiple": false,
          "defaultValue": "United States Of America",
          "protected": false,
          "unique": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "spellcheck": true,
          "validate": {
            "required": true,
            "minLength": "",
            "maxLength": "",
            "pattern": "",
            "custom": "",
            "customPrivate": false
          },
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "type": "textfield",
          "labelPosition": "top",
          "tags": [],
          "properties": {
            "xpath": "Legal/PostAddr1/CountryCode"
          },
          "lockKey": true
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "inputType": "text",
          "inputMask": "999-999-9999",
          "label": "Business Phone",
          "key": "qid11",
          "placeholder": "",
          "prefix": "+1",
          "suffix": "",
          "multiple": false,
          "defaultValue": "",
          "protected": false,
          "unique": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "spellcheck": true,
          "validate": {
            "required": true,
            "minLength": "",
            "maxLength": "",
            "pattern": "^\\([0-9]{3}\\) [0-9]{3}-[0-9]{4}",
            "custom": "",
            "customPrivate": false,
            "customMessage": "Please provide a valid Business Phone"
          },
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "type": "textfield",
          "labelPosition": "top",
          "tags": [],
          "properties": {
            "xpath": "PhoneNum[#n]/Phone"
          },
          "lockKey": true
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "inputType": "text",
          "inputMask": "",
          "label": "Primary Contact Name",
          "key": "qid12",
          "placeholder": "",
          "prefix": "",
          "suffix": "",
          "multiple": false,
          "defaultValue": "",
          "protected": false,
          "unique": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "spellcheck": true,
          "validate": {
            "required": true,
            "minLength": "",
            "maxLength": "",
            "pattern": "",
            "custom": "",
            "customPrivate": false
          },
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "type": "textfield",
          "labelPosition": "top",
          "tags": [],
          "properties": {
            "xpath": "Entity/CovidCare/PrimaryCare"
          },
          "lockKey": true
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "inputType": "text",
          "inputMask": "",
          "label": "Email Address",
          "key": "qid13",
          "placeholder": "",
          "prefix": "",
          "suffix": "",
          "multiple": false,
          "defaultValue": "",
          "protected": false,
          "unique": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "spellcheck": true,
          "validate": {
            "required": true,
            "minLength": "",
            "maxLength": "",
            "pattern": "[a-zA-Z0-9._%-]+@[a-zA-Z0-9-]+\\.[a-z.A-Z]{2,20}",
            "custom": "",
            "customPrivate": false,
            "customMessage": "Please provide a valid email address"
          },
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "type": "textfield",
          "labelPosition": "top",
          "tags": [],
          "properties": {
            "xpath": "Email#1/EmailAddr"
          },
          "lockKey": true
        }
      ],
      "type": "panel",
      "breadcrumb": "default",
      "hideLabel": true,
      "tags": [],
      "conditional": {
        "show": "",
        "when": null,
        "eq": ""
      },
      "properties": {},
      "label": "panel"
    },
    {
      "clearOnHide": false,
      "key": "panel4",
      "input": false,
      "title": "Payroll & Employee Info",
      "htmlTitle": "<p><strong>Payroll &amp; Employee Info</strong></p>\n" +
        "<p><strong>Calculating Average Monthly Payroll</strong></p>\n" +
        "<p>To calculate &ldquo;Average Monthly Payroll&rdquo; below, most Applicants will use the average monthly payroll for 2019, excluding costs over $100,000 on an annualized basis for each employee. For seasonal businesses, the Applicant may elect to instead use average monthly payroll for the time period between February 15, 2019 and June 30, 2019, excluding costs over $100,000 on an annualized basis for each employee. For new businesses, average monthly payroll may be calculated using the time period from January 1, 2020 to February 29, 2020, excluding costs over $100,000 on an annualized basis for each employee.</p>\n" +
        "<p><strong>Calculating EIDL, Net of Advance</strong></p>\n" +
        "<p>If Applicant is refinancing an Economic Injury Disaster Loan (EIDL): Add the outstanding amount of an EIDL made between January 31, 2020 and April 3, 2020, less the amount of any &ldquo;advance&rdquo; under an EIDL COVID-19 loan, to Loan Request as indicated on the form.</p>\n" +
        "<p><strong>Understanding Payroll Costs</strong></p>\n" +
        "<p>With respect to &ldquo;purpose of the loan,&rdquo; payroll costs consist of compensation to employees (whose principal place of residence is the United States) in the form of salary, wages, commissions, or similar compensation; cash tips or the equivalent (based on employer records of past tips or, in the absence of such records, a reasonable, good-faith employer estimate of such tips); payment for vacation, parental, family, medical, or sick leave; allowance for separation or dismissal; payment for the provision of employee benefits consisting of group health care coverage, including insurance premiums, and retirement; payment of state and local taxes assessed on compensation of employees; and for an independent contractor or sole proprietor, wage, commissions, income, or net earnings from self-employment or similar compensation.</p>\n",
      "theme": "default",
      "tableView": false,
      "components": [
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "inputType": "number",
          "label": "Average Monthly Payroll",
          "key": "qid14",
          "placeholder": "",
          "prefix": "$",
          "suffix": "",
          "defaultValue": "",
          "protected": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "validate": {
            "required": true,
            "min": "",
            "max": "",
            "step": "any",
            "integer": "",
            "multiple": "",
            "pattern": "^\\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(.[0-9][0-9])?$",
            "custom": " is 1,124,634.00. You can not enter negative numbers.",
            "customMessage": "Negative number and special characters are not allowed."
          },
          "type": "textfield",
          "labelPosition": "top",
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": "",
            "pattern": "(\\d)(?=(\\d{3})+(?!\\d))"
          },
          "properties": {},
          "delimiter": true,
          "requireDecimal": true,
          "decimalLimit": 2,
          "lockKey": true
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "inputType": "number",
          "label": "Loan Request Amount",
          "key": "qid15",
          "placeholder": "",
          "prefix": "$",
          "suffix": ".00",
          "suffixIcon": "help",
          "defaultValue": "",
          "protected": false,
          "persistent": true,
          "help": "2.5X Average Monthly Payroll + EIDL, Net of Advance (if applicable)",
          "hidden": false,
          "clearOnHide": true,
          "validate": {
            "required": true,
            "min": "",
            "max": "",
            "step": "any",
            "integer": "",
            "multiple": "",
            "customMessage": "Loan request must be less than or equal to $10 million",
            "pattern": "^[0-9,]{1,9}$|^10,000,000$"
          },
          "type": "textfield",
          "labelPosition": "top",
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": "",
            "pattern": "(\\d)(?=(\\d{3})+(?!\\d))"
          },
          "properties": {},
          "delimiter": true,
          "requireDecimal": true,
          "decimalLimit": 2,
          "lockKey": true
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "inputType": "number",
          "label": "Number of Employees",
          "key": "qid16",
          "placeholder": "",
          "prefix": "",
          "suffix": "",
          "defaultValue": "",
          "protected": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "validate": {
            "required": true,
            "min": "",
            "max": "",
            "step": "any",
            "integer": "",
            "multiple": "",
            "custom": "",
            "pattern": "",
            "customMessage": " less than or equal to 500.",
            "json": {"<=" : [ { "var" : "data.qid16" }, 500 ]}
          },
          "type": "number",
          "labelPosition": "top",
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "properties": {},
          "lockKey": true
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "label": "Purpose of the loan (you may select more than one)",
          "key": "qid17",
          "placeholder": "",
          "data": {
            "values": [
              {
                "value": "payroll",
                "label": "Payroll"
              },
              {
                "value": "leaseMortgageInterest",
                "label": "Lease / Mortgage Interest"
              },
              {
                "value": "utilities",
                "label": "Utilities"
              },
              {
                "value": "other",
                "label": "Other"
              }
            ],
            "json": "",
            "url": "",
            "resource": "",
            "custom": ""
          },
          "dataSrc": "values",
          "valueProperty": "value",
          "defaultValue": "",
          "refreshOn": "",
          "filter": "",
          "authenticate": false,
          "template": "<span>{{ item.label }}</span>",
          "multiple": true,
          "protected": false,
          "unique": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "validate": {
            "required": true
          },
          "type": "select",
          "labelPosition": "top",
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "properties": {},
          "lockKey": true
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "inputType": "text",
          "inputMask": "",
          "label": "If Other (Explain)",
          "key": "qid18",
          "placeholder": "",
          "prefix": "",
          "suffix": "",
          "multiple": false,
          "defaultValue": "",
          "protected": false,
          "unique": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "spellcheck": true,
          "validate": {
            "required": false,
            "minLength": "",
            "maxLength": "",
            "pattern": "",
            "custom": "",
            "customPrivate": false
          },
          "conditional": {
            "show": "",
            "when": null,
            "eq": "",
            "json": {
              "in": [
                "other",
                {
                  "var": "data.qid17"
                }
              ]
            }
          },
          "type": "textfield",
          "labelPosition": "top",
          "tags": [],
          "properties": {},
          "lockKey": true
        }
      ],
      "type": "panel",
      "breadcrumb": "default",
      "hideLabel": true,
      "tags": [],
      "conditional": {
        "show": "",
        "when": null,
        "eq": ""
      },
      "properties": {},
      "label": "panel4"
    },
    {
      "clearOnHide": false,
      "key": "panel2",
      "input": false,
      "title": "Applicant Ownership",
      "htmlTitle": "<p><strong>Applicant Ownership</strong></p>\n" +
        "<p>All of the following parties are considered owners of the Applicant Business as defined in 13 CFR &sect; 120.10, as well as &ldquo;principals.&rdquo;</p>\n" +
        "<ul>\n" +
        "    <li>For a sole proprietorship, the sole proprietor;</li>\n" +
        "    <li>For a partnership, all general partners, and all limited partners owning 20% or more of the equity of the firm;</li>\n" +
        "    <li>For a corporation, all owners of 20% or more of the corporation;</li>\n" +
        "    <li>For limited liability companies, all members owning 20% or more of the company; and</li>\n" +
        "    <li>Any Trustor owning 20% or more of the company (if the Applicant is owned by a trust).</li>\n" +
        "</ul>",
      "theme": "default",
      "tableView": false,
      "components": [
        {
          "autofocus": false,
          "input": true,
          "tree": true,
          "components": [
            {
              "autofocus": false,
              "input": true,
              "tableView": true,
              "inputType": "text",
              "inputMask": "",
              "label": "Owner Name",
              "key": "qid19",
              "placeholder": "",
              "prefix": "",
              "suffix": "",
              "multiple": false,
              "defaultValue": "",
              "protected": false,
              "unique": false,
              "persistent": true,
              "hidden": false,
              "clearOnHide": true,
              "spellcheck": true,
              "validate": {
                "required": true,
                "minLength": "",
                "maxLength": "",
                "pattern": "",
                "custom": "",
                "customPrivate": false
              },
              "conditional": {
                "show": "",
                "when": null,
                "eq": ""
              },
              "type": "textfield",
              "inDataGrid": true,
              "labelPosition": "top",
              "tags": [],
              "properties": {},
              "lockKey": true
            },
            {
              "autofocus": false,
              "input": true,
              "tableView": true,
              "inputType": "text",
              "inputMask": "",
              "label": "Title",
              "key": "qid20",
              "placeholder": "",
              "prefix": "",
              "suffix": "",
              "multiple": false,
              "defaultValue": "",
              "protected": false,
              "unique": false,
              "persistent": true,
              "hidden": false,
              "clearOnHide": true,
              "spellcheck": true,
              "validate": {
                "required": true,
                "minLength": "",
                "maxLength": "",
                "pattern": "",
                "custom": "",
                "customPrivate": false
              },
              "conditional": {
                "show": "",
                "when": null,
                "eq": ""
              },
              "type": "textfield",
              "inDataGrid": true,
              "labelPosition": "top",
              "tags": [],
              "properties": {},
              "lockKey": true
            },
            {
              "autofocus": false,
              "input": true,
              "tableView": true,
              "inputType": "text",
              "inputMask": "",
              "label": "Ownership %",
              "key": "qid21",
              "placeholder": "",
              "prefix": "",
              "suffix": "%",
              "multiple": false,
              "defaultValue": "",
              "protected": false,
              "unique": false,
              "persistent": true,
              "hidden": false,
              "clearOnHide": true,
              "spellcheck": true,
              "validate": {
                "required": true,
                "minLength": "",
                "maxLength": "",
                "pattern": "^[1-9][0-9,]{0,1}$|^100$",
                "custom": "",
                "customPrivate": false,
                "customMessage": "Ownership must be less than or equal to 100%"
              },
              "conditional": {
                "show": "",
                "when": null,
                "eq": ""
              },
              "type": "number",
              "inDataGrid": true,
              "labelPosition": "top",
              "tags": [],
              "properties": {},
              "lockKey": true
            },
            {
              "autofocus": false,
              "input": true,
              "tableView": true,
              "inputType": "text",
              "inputMask": "",
              "label": "TIN (EIN, SSN)",
              "help": "",
              "key": "qid22",
              "placeholder": "",
              "prefix": "",
              "suffix": "",
              "multiple": false,
              "defaultValue": "",
              "protected": false,
              "unique": false,
              "persistent": true,
              "hidden": false,
              "clearOnHide": true,
              "spellcheck": true,
              "validate": {
                "required": true,
                "minLength": "",
                "maxLength": "",
                "pattern": "(?:\\d{3}-\\d{2}-\\d{4}|\\d{2}-\\d{7})",
                "custom": "",
                "customPrivate": false,
                "customMessage": "Must match XX-XXXXXXX or XXX-XX-XXXX"
              },
              "conditional": {
                "show": "",
                "when": null,
                "eq": ""
              },
              "type": "textfield",
              "inDataGrid": true,
              "labelPosition": "top",
              "tags": [],
              "properties": {},
              "lockKey": true
            },
            {
              "autofocus": false,
              "input": true,
              "tableView": true,
              "inputType": "text",
              "inputMask": "",
              "label": "Address",
              "key": "qid23",
              "placeholder": "",
              "prefix": "",
              "suffix": "",
              "multiple": false,
              "defaultValue": "",
              "protected": false,
              "unique": false,
              "persistent": true,
              "hidden": false,
              "clearOnHide": true,
              "spellcheck": true,
              "validate": {
                "required": true,
                "minLength": "",
                "maxLength": "",
                "pattern": "",
                "custom": "",
                "customPrivate": false
              },
              "conditional": {
                "show": "",
                "when": null,
                "eq": ""
              },
              "type": "textfield",
              "inDataGrid": true,
              "labelPosition": "top",
              "tags": [],
              "properties": {},
              "lockKey": true
            }
          ],
          "tableView": true,
          "label": "List all owners of 20% or more of the equity of the Applicant:",
          "key": "panel2ListallownersofApplicantwithgreaterthan20Ownershipstakes",
          "protected": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "type": "datagrid",
          "addAnotherPosition": "bottom",
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "validate": {
            minLength: 1
          },
          "properties": {}
        }
      ],
      "type": "panel",
      "breadcrumb": "default",
      "hideLabel": true,
      "tags": [],
      "conditional": {
        "show": "",
        "when": null,
        "eq": ""
      },
      "properties": {},
      "label": "panel2"
    },
    {
      "clearOnHide": false,
      "key": "panel3",
      "input": false,
      "title": "Additional Questions",
      "htmlTitle": "<p><strong>Additional Questions</strong></p>\n" +
        "<p>If questions (1) or (2) below are answered &ldquo;Yes,&rdquo; the loan will not be approved.</p>\n" +
        "<p>For question (3), if you have more than 500 employees in aggregate based on affiliations, you may exceed size requirements for this loan. There are exceptions for certain industries.</p>\n" +
        "<p>If questions (5) or (6) are answered &ldquo;Yes,&rdquo; the loan will not be approved.&nbsp;</p>",
      "theme": "default",
      "tableView": false,
      "components": [
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "inputType": "radio",
          "label": "Is the Applicant or any owner of the Applicant presently suspended, debarred, proposed for debarment, declared ineligible, voluntarily excluded from participation in this transaction by any Federal department or agency, or presently involved in any bankruptcy?",
          "key": "qid24",
          "number": 1,
          "values": [
            {
              "value": "yes",
              "label": "Yes",
              "shortcut": ""
            },
            {
              "value": "no",
              "label": "No",
              "shortcut": ""
            }
          ],
          "defaultValue": "",
          "protected": false,
          "fieldSet": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "validate": {
            "required": true,
            "custom": "",
            "customPrivate": false
          },
          "type": "radio",
          "labelPosition": "top",
          "optionsLabelPosition": "right",
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "properties": {},
          "inline": true,
          "lockKey": true
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "inputType": "radio",
          "label": "Has the Applicant, any owner of the Applicant, or any business owned or controlled by any of them, ever obtained a direct or guaranteed loan from SBA or any other Federal agency that is currently delinquent or has defaulted in the last 7 years and caused a loss to the government?",
          "key": "qid25",
          "number": 2,
          "values": [
            {
              "value": "yes",
              "label": "Yes",
              "shortcut": ""
            },
            {
              "value": "no",
              "label": "No",
              "shortcut": ""
            }
          ],
          "defaultValue": "",
          "protected": false,
          "fieldSet": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "validate": {
            "required": true,
            "custom": "",
            "customPrivate": false
          },
          "type": "radio",
          "labelPosition": "top",
          "optionsLabelPosition": "right",
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "properties": {},
          "inline": true,
          "lockKey": true
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "inputType": "radio",
          "label": "Is the Applicant or any owner of the Applicant an owner of any other business, or have common management with, any other business?",
          "key": "qid26",
          "number": 3,
          "values": [
            {
              "value": "yes",
              "label": "Yes",
              "shortcut": ""
            },
            {
              "value": "no",
              "label": "No",
              "shortcut": ""
            }
          ],
          "defaultValue": "",
          "protected": false,
          "fieldSet": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "validate": {
            "required": true,
            "custom": "",
            "customPrivate": false
          },
          "type": "radio",
          "labelPosition": "top",
          "optionsLabelPosition": "right",
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "properties": {},
          "inline": true,
          "lockKey": true
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "inputType": "radio",
          "label": "Has the Applicant received an SBA Economic Injury Disaster Loan between January 31, 2020 and April 3, 2020?",
          "key": "qid27",
          "number": 4,
          "values": [
            {
              "value": "yes",
              "label": "Yes",
              "shortcut": ""
            },
            {
              "value": "no",
              "label": "No",
              "shortcut": ""
            }
          ],
          "defaultValue": "",
          "protected": false,
          "fieldSet": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "validate": {
            "required": true,
            "custom": "",
            "customPrivate": false
          },
          "type": "radio",
          "labelPosition": "top",
          "optionsLabelPosition": "right",
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "properties": {},
          "inline": true,
          "lockKey": true
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "inputType": "radio",
          "label": "Is the Applicant (if an individual) or any individual owning 20% or more of the equity of the Applicant subject to an indictment, criminal information, arraignment, or other means by which formal criminal charges are brought in any jurisdiction, or presently incarcerated, or on probation or parole?",
          "key": "qid28",
          "number": 5,
          "values": [
            {
              "value": "yes",
              "label": "Yes",
              "shortcut": ""
            },
            {
              "value": "no",
              "label": "No",
              "shortcut": ""
            }
          ],
          "defaultValue": "",
          "protected": false,
          "fieldSet": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "validate": {
            "required": true,
            "custom": "",
            "customPrivate": false
          },
          "type": "radio",
          "labelPosition": "top",
          "optionsLabelPosition": "right",
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "properties": {},
          "inline": true,
          "lockKey": true
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "inputType": "radio",
          "label": "Within the last 5 years, for any felony, has the Applicant (if an individual) or any owner of the Applicant 1) been convicted; 2) pleaded guilty; 3) pleaded nolo contendere; 4) been placed on pretrial diversion; or 5) been placed on any form of parole or probation (including probation before judgment)?",
          "key": "qid29",
          "number": 6,
          "values": [
            {
              "value": "yes",
              "label": "Yes",
              "shortcut": ""
            },
            {
              "value": "no",
              "label": "No",
              "shortcut": ""
            }
          ],
          "defaultValue": "",
          "protected": false,
          "fieldSet": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "validate": {
            "required": true,
            "custom": "",
            "customPrivate": false
          },
          "type": "radio",
          "labelPosition": "top",
          "optionsLabelPosition": "right",
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "properties": {},
          "inline": true,
          "lockKey": true
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "inputType": "radio",
          "label": "Is the United States the principal place of residence for all employees of the Applicant included in the Applicant’s payroll calculation above?",
          "key": "qid30",
          "number": 7,
          "values": [
            {
              "value": "yes",
              "label": "Yes",
              "shortcut": ""
            },
            {
              "value": "no",
              "label": "No",
              "shortcut": ""
            }
          ],
          "defaultValue": "",
          "protected": false,
          "fieldSet": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "validate": {
            "required": true,
            "custom": "",
            "customPrivate": false
          },
          "type": "radio",
          "labelPosition": "top",
          "optionsLabelPosition": "right",
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "properties": {},
          "inline": true,
          "lockKey": true
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "inputType": "radio",
          "label": "Is the Applicant a franchise that is listed in the SBA’s Franchise Directory?",
          "key": "qid31",
          "number": 8,
          "values": [
            {
              "value": "yes",
              "label": "Yes",
              "shortcut": ""
            },
            {
              "value": "no",
              "label": "No",
              "shortcut": ""
            }
          ],
          "defaultValue": "",
          "protected": false,
          "fieldSet": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "validate": {
            "required": true,
            "custom": "",
            "customPrivate": false
          },
          "type": "radio",
          "labelPosition": "top",
          "optionsLabelPosition": "right",
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "properties": {},
          "inline": true,
          "lockKey": true
        }
      ],
      "type": "panel",
      "breadcrumb": "default",
      "hideLabel": true,
      "tags": [],
      "conditional": {
        "show": "",
        "when": null,
        "eq": ""
      },
      "properties": {},
      "tooltip": "",
      "label": "panel3"
    }
  ],
  "_id": "5e86262c516e11367afc0771",
  "revisions": "",
  "_vid": 0,
  "display": "form",
  "submissionAccess": [
    {
      "roles": [
        "59cee28e0b540200077b57e9"
      ],
      "type": "create_own"
    },
    {
      "roles": [
        "59cee28e0b540200077b57e9"
      ],
      "type": "read_own"
    },
    {
      "roles": [
        "59cee28e0b540200077b57e9"
      ],
      "type": "update_own"
    },
    {
      "roles": [
        "59cee28e0b540200077b57e9"
      ],
      "type": "delete_own"
    }
  ],
  "title": "",
  "name": "smeLoanCovidCare",
  "path": "smeloancovidcare",
  "project": "59cee28e0b540200077b57e7",
  "access": [
    {
      "roles": [
        "59cee28e0b540200077b57e8",
        "59cee28e0b540200077b57e9",
        "59cee28e0b540200077b57ea"
      ],
      "type": "read_all"
    }
  ],
  "created": "2020-04-02T17:51:40.586Z",
  "modified": "2020-04-03T19:37:50.387Z",
  "machineName": "formio:smeLoanCovidCare"
};
