// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Button from "./Button";

const Form = () => {
  return (
    <form className="flex flex-col">
      <div className="flex flex-col gap-[20px] mb-[20px]">
        <Input type="fullname" placeholder="Vorname, Nachname" />
        <Input type="email" placeholder="E-Mail Adresse" />
        <div className="flex flex-col xl:flex-row gap-[20px]">
          <Input type="phone" placeholder="Telefonnummer" />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <Textarea
          className="h-[180px] resize-none rounded-none"
          placeholder="Nachricht"
        />
        <Button text="Senden">Senden</Button>
      </div>
    </form>
  );
};

export default Form;

{
  /* <Select>
            <SelectTrigger className="w-full rounded-none h-[54px] text-secondary outline-none focus:shadow-md focus:shadow-accent">
              <SelectValue placeholder="Payment Option"></SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-white shadow-md shadow-accent">
              <SelectGroup>
                <SelectLabel>Payment Option</SelectLabel>
                <SelectItem className="focus:text-white" value="bank">
                  Bank Transfer
                </SelectItem>
                <SelectItem className="focus:text-white" value="paypal">
                  Paypal
                </SelectItem>
                <SelectItem className="focus:text-white" value="card">
                  Credit Card
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select> */
}
