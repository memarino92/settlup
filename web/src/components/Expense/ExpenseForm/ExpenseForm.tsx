import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const ExpenseForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.expense?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.expense?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="name" className="rw-field-error" />

        <Label
          name="amount"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Amount
        </Label>
        <TextField
          name="amount"
          defaultValue={props.expense?.amount}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="amount" className="rw-field-error" />

        <Label
          name="expenseListId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Expense list id
        </Label>
        <TextField
          name="expenseListId"
          defaultValue={props.expense?.expenseListId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="expenseListId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ExpenseForm
