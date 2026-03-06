"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  Form, FormField, FormItem, FormLabel, FormControl, FormMessage,
} from "@/components/ui/form";

const schema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  streetAddress: z.string().min(1, "Required"),
  postcode: z.string().min(1, "Required"),
  contactNumber: z.string().min(1, "Required"),
  email: z.string().email("Invalid email address"),
  discussProject: z.enum(["yes", "no"] as const, { error: "Please select an option" }),
});

type FormValues = z.infer<typeof schema>;

export function BrochureForm() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormValues) => {
    console.log("Brochure request:", data);
    setSubmitted(true);
  };

  return (
    <section className="bg-linen py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h1
          className="font-serif text-4xl md:text-5xl text-ink font-light mb-4"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Request A Brochure
        </h1>
        <p className="text-ink/60 text-sm leading-relaxed mb-10">
          To request a copy of our brochure, please fill in your details below.
          We'll post it straight to you — completely free of charge.
        </p>

        {submitted ? (
          <Alert variant="success">
            <AlertTitle>Brochure request received</AlertTitle>
            <AlertDescription>
              Thank you! We'll send your iWoodz Creation brochure shortly.
            </AlertDescription>
          </Alert>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {/* First / Last name row */}
              <div className="grid grid-cols-2 gap-4">
                <FormField control={form.control} name="firstName" render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl><Input placeholder="Jane" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="lastName" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl><Input placeholder="Smith" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <FormField control={form.control} name="streetAddress" render={({ field }) => (
                <FormItem>
                  <FormLabel>Street Address</FormLabel>
                  <FormControl><Input placeholder="123 Main Street" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="postcode" render={({ field }) => (
                <FormItem>
                  <FormLabel>Postcode</FormLabel>
                  <FormControl><Input placeholder="2000" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="contactNumber" render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Number</FormLabel>
                  <FormControl><Input placeholder="+27 00 000 0000" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl><Input type="email" placeholder="jane@example.com" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="discussProject" render={({ field }) => (
                <FormItem>
                  <FormLabel>Would you like to discuss your project with one of our designers?</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} value={field.value} className="flex gap-6 mt-1">
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="yes" id="discuss-yes" />
                        <label htmlFor="discuss-yes" className="text-sm text-ink cursor-pointer">Yes</label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="no" id="discuss-no" />
                        <label htmlFor="discuss-no" className="text-sm text-ink cursor-pointer">No</label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <Button
                type="submit"
                className="bg-ink text-white hover:bg-ink/85 uppercase tracking-[0.18em] text-xs px-8 h-12 w-full mt-2"
              >
                GET MY FREE BROCHURE
              </Button>
            </form>
          </Form>
        )}
      </div>
    </section>
  );
}
