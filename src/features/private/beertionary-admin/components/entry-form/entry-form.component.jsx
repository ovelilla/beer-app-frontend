// Components
import { ButtonLoading } from "@/components/button-loading/button-loading.component";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// Constants
import constants from "./constants/entry-form.constants";

export const EntryForm = ({ form, handleSubmit, label, loading }) => (
  <Form {...form}>
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name={constants.FORM_FIELD_WORD.name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{constants.FORM_FIELD_WORD.label}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={loading}
                  placeholder={constants.FORM_FIELD_WORD.placeholder}
                  type={constants.FORM_FIELD_WORD.type}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={constants.FORM_FIELD_DESCRIPTION.name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{constants.FORM_FIELD_DESCRIPTION.label}</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  disabled={loading}
                  placeholder={constants.FORM_FIELD_DESCRIPTION.placeholder}
                  rows={10}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <ButtonLoading
        {...constants.BUTTON_SUBMIT_PROPS}
        {...{ label, loading }}
      />
    </form>
  </Form>
);

export default EntryForm;
