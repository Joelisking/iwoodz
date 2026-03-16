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
import { kennelOrderSchema, type KennelOrderValues } from "@/lib/order-schema";

const PRICES = { single: 3000, double: 5000 } as const;
const MAX_NOTES = 300;

const SIZES = [
  { value: "single" as const, label: "Single", dims: "4×4 ft", price: PRICES.single },
  { value: "double" as const, label: "Double", dims: "4×8 ft", price: PRICES.double },
];

const ROOFING = [
  { value: "red" as const, label: "Red", hex: "#C0392B" },
  { value: "green" as const, label: "Green", hex: "#27613A" },
];

export function KennelOrderForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [notesCount, setNotesCount] = useState(0);

  const form = useForm<KennelOrderValues>({
    resolver: zodResolver(kennelOrderSchema),
    defaultValues: {
      productType: "kennel",
      quantity: 1,
    },
  });

  const { watch, formState: { isSubmitting } } = form;
  const selectedSize = watch("size");
  const quantity = watch("quantity") ?? 1;
  const unitPrice = selectedSize ? PRICES[selectedSize] : null;
  const total = unitPrice ? unitPrice * quantity : null;

  const onSubmit = async (data: KennelOrderValues) => {
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
          Thank you for your order. The iWoodz Creation team will be in touch to confirm your order and arrange delivery.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

        {/* Size */}
        <FormField control={form.control} name="size" render={({ field }) => (
          <FormItem>
            <FormLabel className="text-xs uppercase tracking-[0.2em] text-ink/60">Size</FormLabel>
            <FormControl>
              <div className="grid grid-cols-2 gap-3 mt-1">
                {SIZES.map((s) => (
                  <button
                    key={s.value}
                    type="button"
                    onClick={() => field.onChange(s.value)}
                    className={`text-left border px-4 py-4 transition-colors ${
                      field.value === s.value
                        ? "border-gold bg-gold/5"
                        : "border-ink/20 hover:border-ink/40"
                    }`}
                  >
                    <p className="text-sm font-medium text-ink">{s.label}</p>
                    <p className="text-xs text-ink/50 mt-0.5">{s.dims}</p>
                    <p className="text-sm text-gold font-medium mt-2">GHC {s.price.toLocaleString()}</p>
                  </button>
                ))}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />

        {/* Roofing */}
        <FormField control={form.control} name="roofing" render={({ field }) => (
          <FormItem>
            <FormLabel className="text-xs uppercase tracking-[0.2em] text-ink/60">Roofing Colour</FormLabel>
            <FormControl>
              <div className="flex gap-3 mt-1">
                {ROOFING.map((r) => (
                  <button
                    key={r.value}
                    type="button"
                    onClick={() => field.onChange(r.value)}
                    className={`flex items-center gap-2 border px-4 py-3 transition-colors ${
                      field.value === r.value
                        ? "border-gold bg-gold/5"
                        : "border-ink/20 hover:border-ink/40"
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: r.hex }} />
                    <span className="text-sm text-ink">{r.label}</span>
                  </button>
                ))}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />

        {/* Quantity + live price */}
        <div className="space-y-3">
          <FormField control={form.control} name="quantity" render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs uppercase tracking-[0.2em] text-ink/60">Quantity</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={1}
                  max={20}
                  className="w-24"
                  {...field}
                  onChange={(e) => field.onChange(parseInt(e.target.value, 10) || 1)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          {total !== null && (
            <div className="bg-ink/4 border border-ink/10 px-4 py-3 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.15em] text-ink/50">Order Total</span>
              <span className="text-lg font-medium text-gold">
                GHC {total.toLocaleString()}
              </span>
            </div>
          )}
        </div>

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
