import {
  Form,
  FieldError,
  NumberField,
  Label,
  Submit,
  TextField,
} from '@redwoodjs/forms'

const ExpenseForm = () => {
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className="w-full max-w-full">
      <Form
        onSubmit={onSubmit}
        className=" flex flex-nowrap align-middle justify-evenly px-2 p-2 mb-4"
      >
        <div className="m-2 w-2/4">
          <Label
            name="Name"
            className="block text-gray-700 text-sm font-bold mb-2"
            errorClassName="text-red-500 text-sm font-bold"
          >
            Name
          </Label>
          <TextField
            name="Name"
            validation={{ required: true }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            errorClassName="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          <FieldError name="Name" className="text-red-500 text-xs italic" />
        </div>
        <div className="m-2 w-1/4">
          <Label
            name="Amount"
            className="block text-gray-700 text-sm font-bold mb-2"
            errorClassName="text-red-500 text-sm font-bold"
          >
            Amount
          </Label>
          <NumberField
            name="Amount"
            validation={{ required: true }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            errorClassName="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          <FieldError name="Amount" className="text-red-500 text-xs italic" />
        </div>
        <Submit className="bg-white text-blue-500 text-4xl font-bold  border border-blue-500 rounded-full hover:text-white hover:bg-blue-500">
          +
        </Submit>
      </Form>
    </div>
  )
}

export default ExpenseForm
