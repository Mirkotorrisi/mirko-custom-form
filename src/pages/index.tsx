import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { formConfig } from "../assets/form.config";
import Form from "../components/Form";
import { submitForm } from "../services/formService";

const IndexPage: React.FC<PageProps> = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await submitForm(e.target as HTMLFormElement);
  };

  return (
    <main className="w-full h-full bg-slate-200">
      <h1 className="text-6xl text-center text-indigo-600 font-bold">
        Mirko custom form
      </h1>
      <div className="container mx-auto py-8">
        <p className="text-lg text-indigo-950">
          This form is built from scratch using only React hooks: useReducer,
          useMemo.
        </p>
        <p className="text-lg text-indigo-950">
          It uses tailwind for styling the inputs and the form container.
        </p>
        <p className="text-lg text-indigo-950">
          All the components are customizable, by passing classes to the
          formClassNames prop.
        </p>
        <p className="text-lg text-indigo-950">
          To add an input, customize the formConfig prop object
        </p>
      </div>
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
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Mirko Torrisi's custom form</title>;
