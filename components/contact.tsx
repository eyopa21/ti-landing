"use client";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,

  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Label } from "@radix-ui/react-label";
import { Mail, Phone } from "lucide-react";
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  terms: z.boolean().refine((value) => value === true, {
    message: "You must accept the privacy and terms.",
  }),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      terms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission here
  }

  return (
    <>
   
   <section className="relative">
      <div 
        className="px-8 lg:px-4 py-20 bg-cover bg-center w-full"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 128, 0.7)),
            url('/contactBG.png')
          `,
        }}
      >
        <div className="flex justify-center">
          <h2 className="text-4xl md:text-5xl w-full lg:w-2/3 font-bold text-white text-left lg:text-center mb-12">
            Get a free consultant from one of our experts right now!
          </h2>
        </div>
        <div className="block lg:hidden mb-16 space-y-16">
          <div>
            <p className="text-primary gap-2 mb-2 font-bold flex text-2xl items-center">
              <Phone /> Call for inquiry
            </p>
            <a href="tel:1-800 557 5192" className="text-4xl text-white font-bold">
              1-800 557 5192
            </a>
          </div>
          <div>
            <p className="text-primary gap-2 mb-2 font-bold flex text-2xl items-center">
              <Mail /> Mail us for Inquiry
            </p>
            <a href="mailto:info@quikstartllc.com" className="text-[2.1rem] text-white font-bold">
              info@quikstartllc.com
            </a>
          </div>
        </div>
        <div className="max-w-5xl mx-auto space-y-6 bg-white rounded-xl p-8 py-12 lg:p-12">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="font-semibold">First & Last Name</Label>
                      <FormControl>
                        <Input
                          className="bg-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="font-semibold">Email</Label>
                      <FormControl>
                        <Input
                          type="email"
                          className="bg-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="font-semibold">Phone Number</Label>
                      <FormControl>
                        <Input
                          className="bg-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="font-semibold">Subject</Label>
                      <FormControl>
                        <Input
                          className="bg-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <Label className="font-semibold">Message</Label>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message......"
                        className="bg-white"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-center w-full">
                <FormField
                  control={form.control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-row items-center space-x-3">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="leading-none">
                          <label className="text-sm lg:text-xl text-primary">
                            I accept the privacy and terms
                          </label>
                        </div>
                      </div>
                      <div className="text-xs px-2">
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="w-full">
                SUBMIT
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
    </>
  );
}
