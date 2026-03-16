import { z } from "zod";

const customerFields = {
  fullName: z.string().min(1, "Required"),
  phone: z.string().min(1, "Required"),
  email: z.string().email("Invalid email address"),
  deliveryAddress: z.string().min(1, "Required"),
  notes: z.string().max(300).optional(),
};

export const kennelOrderSchema = z.object({
  productType: z.literal("kennel"),
  size: z.enum(["single", "double"] as const, { error: "Please select a size" }),
  roofing: z.enum(["red", "green"] as const, { error: "Please select a roofing colour" }),
  quantity: z.number().int().min(1, "Minimum 1").max(20, "Maximum 20"),
  ...customerFields,
});

export const handwashOrderSchema = z.object({
  productType: z.literal("handwash"),
  variant: z.enum(["standard", "custom"] as const, { error: "Please select a type" }),
  ...customerFields,
});

export const orderSchema = z.discriminatedUnion("productType", [
  kennelOrderSchema,
  handwashOrderSchema,
]);

export type KennelOrderValues = z.infer<typeof kennelOrderSchema>;
export type HandwashOrderValues = z.infer<typeof handwashOrderSchema>;
export type OrderPayload = z.infer<typeof orderSchema>;
