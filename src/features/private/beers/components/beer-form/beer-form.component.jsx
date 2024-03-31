// Components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert } from "@/components/alert/alert.component";
import { ButtonLoading } from "@/components/button-loading/button-loading.component";
import { Input } from "@/components/ui/input";
// Constants
import constants from "./constants/beer-form.constants";
// Hooks

export const BeerForm = ({ form, handleSubmit, label, loading, message }) => {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-4">
          {constants.FORM_FIELDS.map((formField) => {
            if (formField.type === "text") {
              return (
                <FormField
                  control={form.control}
                  key={formField.name}
                  name={formField.name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{formField.label}</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={loading}
                          placeholder={formField.placeholder}
                          type={formField.type}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              );
            }

            if (formField.type === "select") {
              return (
                <FormField
                  control={form.control}
                  key={formField.name}
                  name={formField.name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{formField.label}</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={formField.placeholder} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {formField.items.map((item) => (
                            <SelectItem key={item} value={item}>
                              {item}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              );
            }
          })}
        </div>
        <Alert {...message} />
        <ButtonLoading
          {...constants.BUTTON_SUBMIT_PROPS}
          {...{ label, loading }}
        />
      </form>
    </Form>
  );
};

export default BeerForm;
