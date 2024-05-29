// Components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ImagePreview } from "./components/image-preview/image-preview.component";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ButtonLoading } from "@/components/button-loading/button-loading.component";
import { Input } from "@/components/ui/input";
// Constants
import constants from "./constants/beer-form.constants";
import { Fragment } from "react";

export const BeerForm = ({
  form,
  handleChangeInputFile,
  handleDeleteImage,
  handleSubmit,
  imagePreviewSrc,
  label,
  loading,
}) => {
  const fileRef = form.register("image");

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-4">
          {constants.FORM_FIELDS.map((formField) => {
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
                        disabled={loading}
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

            if (formField.type === "file") {
              return (
                <Fragment key={formField.name}>
                  <ImagePreview
                    {...{
                      handleDeleteImage,
                      imagePreviewSrc,
                    }}
                  />
                  <FormField
                    control={form.control}
                    name={formField.name}
                    render={() => (
                      <FormItem>
                        <FormLabel>{formField.label}</FormLabel>
                        <FormControl>
                          <Input
                            {...fileRef}
                            accept={formField.accept}
                            disabled={loading}
                            onChange={handleChangeInputFile}
                            placeholder={formField.placeholder}
                            type={formField.type}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </Fragment>
              );
            }

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
          })}
        </div>
        <ButtonLoading
          {...constants.BUTTON_SUBMIT_PROPS}
          {...{ label, loading }}
        />
      </form>
    </Form>
  );
};

export default BeerForm;
