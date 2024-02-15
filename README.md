# Custom Form Builder Documentation

## Introduction

- Overview of the custom form builder.
- Purpose and benefits of using the form builder.
- Brief description of the provided implementation and form configuration.

## Getting Started

- Installation instructions.
- Importing the form component and configuration file.

## Form Component

### Props

1. `handleSubmit`:
   - Description: A function to handle form submission.
   - Type: Function
2. `formConfig`:
   - Description: Configuration object defining form fields and their properties.
   - Type: Object
3. `submitLabel`:
   - Description: Label for the submit button.
   - Type: String
4. `formClassNames`:
   - Description: Custom CSS class names for different elements of the form.
   - Type: Object

### Example Usage

```jsx
<Form
  handleSubmit={handleSubmit}
  formConfig={formConfig}
  submitLabel="Submit"
  formClassNames={{
    container: "container grid grid-cols-2 gap-4 mx-auto p-8",
    input: "border-slate-500 rounded-md border px-4 py-2 h-full w-full",
    submit:
      "col-span-2 mx-auto rounded-lg border border-slate-500 bg-slate-200 font-bold px-8 py-2 hover:cursor-pointer",
    message: "col-span-2 h-48",
  }}
/>
```

## Form Configuration

- Explanation of the configuration file structure.
- Details on each field:
  - `pattern`: Regular expression pattern for validation.
  - `message`: Error message to display if validation fails.
  - `label`: Label for the form field.
  - `placeholder`: Placeholder text for the input field.

### Example Configuration

```typescript
export const formConfig: Record<string, FormFieldEntity> = {
  name: {
    pattern: "^.+$",
    message: "Please insert a valid name",
    label: "Name",
    placeholder: "Your name",
  },
  surname: {
    pattern: "^.+$",
    message: "Please insert a valid surname",
    label: "Surname",
    placeholder: "Your surname",
  },
  email: {
    pattern: "[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+",
    message: "Please insert a valid email",
    label: "Email",
    placeholder: "Your email",
    type: "email",
  },
  phone: {
    pattern: "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$",
    message: "Please insert a valid phone",
    label: "Phone number",
    placeholder: "Your phone number",
    type: "number",
  },
  message: {
    pattern: "^.+$",
    message: "Please leave a message",
    label: "Message",
    placeholder: "",
  },

  // Add more fields as needed
};
```

## Conclusion

- Recap of the features and benefits.
- Final thoughts or considerations.
