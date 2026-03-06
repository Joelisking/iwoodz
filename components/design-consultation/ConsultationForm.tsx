"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  Form, FormField, FormItem, FormLabel, FormControl, FormMessage,
} from "@/components/ui/form";

const ROOM_OPTIONS = [
  { id: "kitchens", label: "Kitchens" },
  { id: "living-spaces", label: "Living Spaces" },
  { id: "wardrobes", label: "Wardrobes & Storage" },
  { id: "container-works", label: "Container Works" },
  { id: "construction", label: "Construction" },
  { id: "other", label: "Other" },
] as const;

const schema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  streetAddress: z.string().min(1, "Required"),
  postcode: z.string().min(1, "Required"),
  contactNumber: z.string().min(1, "Required"),
  email: z.string().email("Invalid email address"),
  rooms: z.array(z.string()).min(1, "Please select at least one option"),
});

type FormValues = z.infer<typeof schema>;

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { rooms: [] },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Consultation request:", data);
    setSubmitted(true);
  };

  const selectedRooms = form.watch("rooms") ?? [];

  const toggleRoom = (id: string) => {
    const current = form.getValues("rooms") ?? [];
    const next = current.includes(id) ? current.filter((r) => r !== id) : [...current, id];
    form.setValue("rooms", next, { shouldValidate: true });
  };

  return (
    <section className="bg-linen py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl text-ink font-light mb-5"
          style={{ fontFamily: "var(--font-cormorant)" }}>
          Design Consultation Request
        </h1>
        <p className="text-ink/60 text-sm leading-relaxed mb-4">
          Our design consultations are completely free of charge and of no-obligation; providing you
          with the opportunity to discuss your ideas and receive expert advice on your bespoke project design.
        </p>
        <p className="text-ink/60 text-sm leading-relaxed mb-10">
          To speak to one of our expert designers about your project, please fill in your details below.
        </p>

        {submitted ? (
          <Alert variant="success">
            <AlertTitle>Consultation request received</AlertTitle>
            <AlertDescription>
              Thank you! One of our designers will be in touch shortly to arrange your free consultation.
            </AlertDescription>
          </Alert>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {/* Row 1: First / Last name */}
              <div className="grid grid-cols-2 gap-4">
                <FormField control={form.control} name="firstName" render={({ field }) => (
                  <FormItem><FormLabel>First Name</FormLabel>
                    <FormControl><Input placeholder="Jane" {...field} /></FormControl>
                    <FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="lastName" render={({ field }) => (
                  <FormItem><FormLabel>Last Name</FormLabel>
                    <FormControl><Input placeholder="Smith" {...field} /></FormControl>
                    <FormMessage /></FormItem>
                )} />
              </div>

              {/* Row 2: Street address */}
              <FormField control={form.control} name="streetAddress" render={({ field }) => (
                <FormItem><FormLabel>Street Address</FormLabel>
                  <FormControl><Input placeholder="123 Main Street" {...field} /></FormControl>
                  <FormMessage /></FormItem>
              )} />

              {/* Row 3: Postcode */}
              <FormField control={form.control} name="postcode" render={({ field }) => (
                <FormItem><FormLabel>Postcode</FormLabel>
                  <FormControl><Input placeholder="2000" {...field} /></FormControl>
                  <FormMessage /></FormItem>
              )} />

              {/* Row 4: Contact number + email */}
              <div className="grid grid-cols-2 gap-4">
                <FormField control={form.control} name="contactNumber" render={({ field }) => (
                  <FormItem><FormLabel>Contact Number</FormLabel>
                    <FormControl><Input placeholder="+27 00 000 0000" {...field} /></FormControl>
                    <FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem><FormLabel>Email Address</FormLabel>
                    <FormControl><Input type="email" placeholder="jane@example.com" {...field} /></FormControl>
                    <FormMessage /></FormItem>
                )} />
              </div>

              {/* Checkboxes */}
              <FormField control={form.control} name="rooms" render={() => (
                <FormItem>
                  <FormLabel>Which rooms/projects are you looking to include?</FormLabel>
                  <div className="grid grid-cols-2 gap-y-3 gap-x-6 mt-1">
                    {ROOM_OPTIONS.map((opt) => (
                      <div key={opt.id} className="flex items-center gap-2">
                        <Checkbox
                          id={opt.id}
                          checked={selectedRooms.includes(opt.id)}
                          onCheckedChange={() => toggleRoom(opt.id)}
                        />
                        <Label htmlFor={opt.id} className="text-sm font-normal text-ink cursor-pointer">
                          {opt.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )} />

              <Button type="submit"
                className="bg-ink text-white hover:bg-ink/85 uppercase tracking-[0.18em] text-xs px-8 h-12 w-full mt-2">
                BOOK MY FREE DESIGN CONSULTATION
              </Button>
            </form>
          </Form>
        )}
      </div>
    </section>
  );
}
