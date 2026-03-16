"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  Form, FormField, FormItem, FormLabel, FormControl, FormMessage,
} from "@/components/ui/form";
import { handwashOrderSchema, type HandwashOrderValues } from "@/lib/order-schema";

const MAX_NOTES = 300;

const VARIANTS = [
  {
    value: "standard" as const,
    label: "Standard",
    price: "GHC 3,500",
    description: "Ready-to-use handwash station at a fixed price.",
  },
  {
    value: "custom" as const,
    label: "Custom Built",
    price: "Price on enquiry",
    description: "Tailored to your specifications. Our team will contact you with a quote.",
  },
];

export function HandwashOrderForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [notesCount, setNotesCount] = useState(0);

  const form = useForm<HandwashOrderValues>({
    resolver: zodResolver(handwashOrderSchema),
    defaultValues: { productType: "handwash" },
  });

  const { watch, formState: { isSubmitting } } = form;
  const selectedVariant = watch("variant");

  const onSubmit = async (data: HandwashOrderValues) => {
    setServerError(null);
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setServerError(json.error ?? "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    }
  };

  if (submitted) {
    return (
      <Alert variant="success">
        <AlertTitle>Order received!</AlertTitle>
        <AlertDescription>
          {selectedVariant === "custom"
            ? "Thank you! A member of our team will be in touch to discuss your custom requirements and provide a quote."
            : "Thank you for your order. The iWoodz Creation team will be in touch to confirm and arrange delivery."}
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

        {/* Variant */}
        <FormField control={form.control} name="variant" render={({ field }) => (
          <FormItem>
            <FormLabel className="text-xs uppercase tracking-[0.2em] text-ink/60">Type</FormLabel>
            <FormControl>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                {VARIANTS.map((v) => (
                  <button
                    key={v.value}
                    type="button"
                    onClick={() => field.onChange(v.value)}
                    className={`text-left border px-4 py-4 transition-colors ${
                      field.value === v.value
                        ? "border-gold bg-gold/5"
                        : "border-ink/20 hover:border-ink/40"
                    }`}
                  >
                    <p className="text-sm font-medium text-ink">{v.label}</p>
                    <p className={`text-sm font-medium mt-1 ${
                      v.value === "standard" ? "text-gold" : "text-ink/50"
                    }`}>{v.price}</p>
                    <p className="text-xs text-ink/50 mt-1 leading-relaxed">{v.description}</p>
                  </button>
                ))}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />

        {selectedVariant === "custom" && (
          <p className="text-sm text-ink/60 italic leading-relaxed border-l-2 border-gold/40 pl-4">
            Our team will reach out to discuss your requirements and provide a personalised quote — no payment is taken at this stage.
          </p>
        )}

        <div className="h-px bg-gold/20" />

        {/* Customer details */}
        <p className="text-xs uppercase tracking-[0.2em] text-ink/50">Your Details</p>

        <div className="space-y-5">
          <FormField control={form.control} name="fullName" render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl><Input placeholder="Jane Smith" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="phone" render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl><Input placeholder="+233 00 000 0000" {...field} /></FormControl>
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

          <FormField control={form.control} name="deliveryAddress" render={({ field }) => (
            <FormItem>
              <FormLabel>Delivery Address</FormLabel>
              <FormControl><Input placeholder="123 Main Street, Accra" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="notes" render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Additional Notes <span className="text-ink/40 font-normal">(optional)</span></FormLabel>
                <span className="text-xs text-ink/40">{notesCount} / {MAX_NOTES}</span>
              </div>
              <FormControl>
                <Textarea
                  placeholder="Any specific requirements or questions..."
                  maxLength={MAX_NOTES}
                  className="min-h-[100px] resize-none"
                  {...field}
                  onChange={(e) => {
                    setNotesCount(e.target.value.length);
                    field.onChange(e);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </div>

        {serverError && (
          <Alert variant="destructive">
            <AlertTitle>Order failed</AlertTitle>
            <AlertDescription>{serverError}</AlertDescription>
          </Alert>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-ink text-white hover:bg-ink/85 uppercase tracking-[0.18em] text-xs px-8 h-12 w-full"
        >
          {isSubmitting ? "PLACING ORDER..." : "PLACE ORDER"}
        </Button>
      </form>
    </Form>
  );
}
