# Custom Form Builder Documentation

## Overview of the Custom Form Builder

The custom form builder provided here offers a straightforward solution for setting up simple forms in React applications without relying on libraries like `react-hook-form`. It provides users with complete control over the form components, allowing for easy customization of styles and behaviors according to specific project requirements.

### Key Features:

- **Simplicity**: The form builder simplifies the process of creating forms by abstracting away complex form management logic.
- **Customization**: Users have the flexibility to customize the form components, including styles and behaviors, to suit their application's design and functionality needs.
- **Control**: Unlike some form libraries, this form builder offers developers total control over the form structure and elements, empowering them to create forms precisely tailored to their project requirements.
- **Independence**: By not relying on external libraries like `react-hook-form`, the custom form builder avoids potential dependencies and compatibility issues, ensuring a streamlined development experience.

### Use Cases:

- Setting up basic forms such as contact forms, login forms, or registration forms.
- Implementing forms in projects where external form management libraries are not preferred or feasible.
- Customizing form components extensively while maintaining simplicity and flexibility.

In summary, the custom form builder provides a convenient solution for developers looking to quickly set up simple forms in React applications while retaining full control over form components and customization options.

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
   - Description: Custom CSS class names for different elements of the form. You can add custom styles for each inputs field by adding a field with the input's key as attribute.
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
