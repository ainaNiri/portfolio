'use client'

import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "./InputField";
import TextAreaField from "./TextareaField";
import { POST } from "../api/send/route";
import { SuccessDialog } from "./SuccessDialog";
import { useState } from "react";

const schema = z.object({
  email: z.email({ message: "Invalid email address!" }),
  firstname: z
    .string()
    .min(2, { message: "First name must be at least 2 characters long!" }),
  message: z
    .string()
    .min(2, { message: "Message must not be empty" }),
});

type Inputs = z.infer<typeof schema>;

export function ContactSection() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });
  
  const sendEMail = handleSubmit(async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setDialogOpen(true);
    } catch (error) {
      console.error(error);
      alert("An error occurred, please try again later");
    } finally {
      setIsLoading(false);
    }
  });
  
  return (
    <div className="max-w-3xl mx-auto px-6">
      <h2 className="text-3xl font-semibold text-white mb-6">Contact</h2>

      <form
        onSubmit={sendEMail}
        className="panel relief p-8 rounded-2xl"
      >
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <InputField
            placeholder="Firstname"
            name="firstname"
            register={register}
            error={errors?.firstname}
          />
          <InputField
            placeholder="Email"
            name="email"
            register={register}
            error={errors?.email}
          />
        </div>

        <TextAreaField
          placeholder="Message"
          name="message"
          register={register}
          error={errors?.message}
          rows={5}
        />

        <div className="mt-4 flex justify-end">
          <button type="submit" className="bg-accent text-[#9fb3d8] relief border border-[#9fb3d8] px-5 py-2 rounded-md font-semibold 
            hover:border-white hover:text-white hover:cursor-pointer transition-colors duration-200" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
      <p className="text-[#9fb3d8] mt-6">Or email: <a href="mailto:randria.ainaniri@gmail.com" className="text-blue-600">randria.ainaniri@gmail.com</a></p>
      <SuccessDialog
        open={dialogOpen}
        title="Success"
        content="Your message has been sent successfully!"
        onClose={() => setDialogOpen(false)}
      ></SuccessDialog>
    </div>
  );
}
