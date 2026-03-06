"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  Form, FormField, FormItem, FormLabel, FormControl, FormMessage,
} from "@/components/ui/form";

const MAX_CHARS = 180;

const schema = z.object({
  fullName: z.string().min(1, "Required"),
  phoneNumber: z.string().min(1, "Required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Required").max(MAX_CHARS, `Maximum ${MAX_CHARS} characters`),
});

type FormValues = z.infer<typeof schema>;

export function ContactEnquireForm() {
  const [submitted, setSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const form = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormValues) => {
    console.log("Contact enquiry:", data);
    setSubmitted(true);
  };

  return (
    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-ink/50 mb-6">ENQUIRE NOW</p>

      {submitted ? (
        <Alert variant="success">
          <AlertTitle>Message received</AlertTitle>
          <AlertDescription>
            Thank you for getting in touch. We'll respond within 1–2 business days.
          </AlertDescription>
        </Alert>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField control={form.control} name="fullName" render={({ field }) => (
              <FormItem><FormLabel>Full Name</FormLabel>
                <FormControl><Input placeholder="Jane Smith" {...field} /></FormControl>
                <FormMessage /></FormItem>
            )} />

            <FormField control={form.control} name="phoneNumber" render={({ field }) => (
              <FormItem><FormLabel>Phone Number</FormLabel>
                <FormControl><Input placeholder="+27 00 000 0000" {...field} /></FormControl>
                <FormMessage /></FormItem>
            )} />

            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem><FormLabel>Email Address</FormLabel>
                <FormControl><Input type="email" placeholder="jane@example.com" {...field} /></FormControl>
                <FormMessage /></FormItem>
            )} />

            <FormField control={form.control} name="message" render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel>Message</FormLabel>
                  <span className="text-xs text-ink/40">{charCount} / {MAX_CHARS}</span>
                </div>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your project..."
                    maxLength={MAX_CHARS}
                    className="min-h-[120px] resize-none"
                    {...field}
                    onChange={(e) => {
                      setCharCount(e.target.value.length);
                      field.onChange(e);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <Button type="submit"
              className="bg-ink text-white hover:bg-ink/85 uppercase tracking-[0.18em] text-xs px-8 h-12 w-full">
              SUBMIT
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
}
