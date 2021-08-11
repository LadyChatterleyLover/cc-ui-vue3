import { CSSProperties } from "vue"
import { FieldErrorList } from 'async-validator'

export interface Callback {
  (isValid?: boolean, invalidFields?: FieldErrorList): void,
}

export type RuleType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'method'
  | 'regexp'
  | 'integer'
  | 'float'
  | 'array'
  | 'object'
  | 'enum'
  | 'date'
  | 'url'
  | 'hex'
  | 'email'
  | 'any'

export interface ValidateOption {
  // whether to suppress internal warning
  suppressWarning?: boolean

  // when the first validation rule generates an error stop processed
  first?: boolean

  // when the first validation rule of the specified field generates an error stop the field processed, 'true' means all fields.
  firstFields?: boolean | string[]
}
export interface ValidateSource {
  [field: string]: any
}

export interface RuleItem {
  type?: RuleType // default type is 'string'
  required?: boolean
  pattern?: RegExp | string
  min?: number // Range of type 'string' and 'array'
  max?: number // Range of type 'string' and 'array'
  len?: number // Length of type 'string' and 'array'
  enum?: Array<string | number | boolean | null | undefined> // possible values of type 'enum'
  whitespace?: boolean
  fields?: Rules // ignore when without required
  options?: ValidateOption,
  trigger?: 'change' | 'blur'
  defaultField?: RuleItem // 'object' or 'array' containing validation rules
  transform?: (value: any) => any
  message?: string | (() => string)
  asyncValidator?: (
    rule: Rules,
    value: any,
    callback: (error: string | string[] | void) => void,
    source: ValidateSource,
    options: ValidateOption,
  ) => void | Promise<void>
  validator?: (
    rule: Rules,
    value: any,
    callback: (error: string | string[] | void) => void,
    source: ValidateSource,
    options: ValidateOption,
  ) => void
}

export interface Rules {
  [field: string]: RuleItem | RuleItem[]
}

export interface ValidateFieldCallback {
  (message?: string, invalidFields?: FieldErrorList): void,
}

export interface FormInstance {
  registerLabelWidth(width: number, oldWidth: number): void,
  deregisterLabelWidth(width: number): void,
  autoLabelWidth: string | undefined,
  emit: (evt: string, ...args: any[]) => void,
  labelSuffix: string,
  inline?: boolean,
  model?: Record<string, unknown>,
  size?: string,
  showMessage?: boolean,
  labelPosition?: string,
  labelWidth?: string,
  rules?: Record<string, unknown>,
  statusIcon?: boolean,
  hideRequiredAsterisk?: boolean,
  disabled?: boolean,
  validate: (callback?: Callback) => Promise<boolean>,
  resetFields: () => void,
  clearValidate: (props?: string | string[]) => void,
  validateField: (props: string | string[], cb: ValidateFieldCallback) => void,
}