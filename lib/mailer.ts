import { Resend } from "resend";
import type { OrderPayload } from "./order-schema";

const resend = new Resend(process.env.RESEND_API_KEY);

const KENNEL_PRICES = { single: 3000, double: 5000 } as const;

function formatGHC(amount: number) {
  return `GHC ${amount.toLocaleString()}`;
}

function buildKennelHtml(payload: Extract<OrderPayload, { productType: "kennel" }>) {
  const unitPrice = KENNEL_PRICES[payload.size];
  const total = unitPrice * payload.quantity;

  return `
    <h2 style="font-family:sans-serif;color:#1A1A1A;">New Dog Kennel Order</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%;max-width:560px;">
      <tr><td style="padding:8px 0;color:#666;width:160px;">Product</td><td style="padding:8px 0;font-weight:600;">Dog Kennel</td></tr>
      <tr><td style="padding:8px 0;color:#666;">Size</td><td style="padding:8px 0;">${payload.size === "single" ? "Single (4×4)" : "Double (4×8)"}</td></tr>
      <tr><td style="padding:8px 0;color:#666;">Roofing Colour</td><td style="padding:8px 0;text-transform:capitalize;">${payload.roofing}</td></tr>
      <tr><td style="padding:8px 0;color:#666;">Quantity</td><td style="padding:8px 0;">${payload.quantity}</td></tr>
      <tr><td style="padding:8px 0;color:#666;">Unit Price</td><td style="padding:8px 0;">${formatGHC(unitPrice)}</td></tr>
      <tr style="border-top:1px solid #eee;"><td style="padding:10px 0;color:#666;font-weight:600;">Total</td><td style="padding:10px 0;font-weight:700;color:#B8976A;font-size:16px;">${formatGHC(total)}</td></tr>
    </table>
    <hr style="border:none;border-top:1px solid #eee;margin:20px 0;" />
    <h3 style="font-family:sans-serif;color:#1A1A1A;">Customer Details</h3>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%;max-width:560px;">
      <tr><td style="padding:6px 0;color:#666;width:160px;">Name</td><td style="padding:6px 0;">${payload.fullName}</td></tr>
      <tr><td style="padding:6px 0;color:#666;">Phone</td><td style="padding:6px 0;">${payload.phone}</td></tr>
      <tr><td style="padding:6px 0;color:#666;">Email</td><td style="padding:6px 0;"><a href="mailto:${payload.email}">${payload.email}</a></td></tr>
      <tr><td style="padding:6px 0;color:#666;">Delivery Address</td><td style="padding:6px 0;">${payload.deliveryAddress}</td></tr>
      ${payload.notes ? `<tr><td style="padding:6px 0;color:#666;">Notes</td><td style="padding:6px 0;">${payload.notes}</td></tr>` : ""}
    </table>
  `;
}

function buildHandwashHtml(payload: Extract<OrderPayload, { productType: "handwash" }>) {
  const isCustom = payload.variant === "custom";

  return `
    <h2 style="font-family:sans-serif;color:#1A1A1A;">New Handwash Station Order</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%;max-width:560px;">
      <tr><td style="padding:8px 0;color:#666;width:160px;">Product</td><td style="padding:8px 0;font-weight:600;">Handwash Station</td></tr>
      <tr><td style="padding:8px 0;color:#666;">Type</td><td style="padding:8px 0;">${isCustom ? "Custom Built" : "Standard"}</td></tr>
      <tr style="border-top:1px solid #eee;">
        <td style="padding:10px 0;color:#666;font-weight:600;">Price</td>
        <td style="padding:10px 0;font-weight:700;color:${isCustom ? "#1A1A1A" : "#B8976A"};font-size:16px;">
          ${isCustom ? "⚠️ Custom Built — contact client to discuss pricing" : "GHC 3,500"}
        </td>
      </tr>
    </table>
    <hr style="border:none;border-top:1px solid #eee;margin:20px 0;" />
    <h3 style="font-family:sans-serif;color:#1A1A1A;">Customer Details</h3>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%;max-width:560px;">
      <tr><td style="padding:6px 0;color:#666;width:160px;">Name</td><td style="padding:6px 0;">${payload.fullName}</td></tr>
      <tr><td style="padding:6px 0;color:#666;">Phone</td><td style="padding:6px 0;">${payload.phone}</td></tr>
      <tr><td style="padding:6px 0;color:#666;">Email</td><td style="padding:6px 0;"><a href="mailto:${payload.email}">${payload.email}</a></td></tr>
      <tr><td style="padding:6px 0;color:#666;">Delivery Address</td><td style="padding:6px 0;">${payload.deliveryAddress}</td></tr>
      ${payload.notes ? `<tr><td style="padding:6px 0;color:#666;">Notes</td><td style="padding:6px 0;">${payload.notes}</td></tr>` : ""}
    </table>
  `;
}

export async function sendOrderEmail(payload: OrderPayload) {
  const adminEmail = process.env.ADMIN_EMAIL;
  if (!adminEmail) throw new Error("ADMIN_EMAIL env var not set");

  const subject =
    payload.productType === "kennel"
      ? `New Order — Dog Kennel | ${payload.fullName}`
      : `New Order — Handwash Station | ${payload.fullName}`;

  const html =
    payload.productType === "kennel"
      ? buildKennelHtml(payload)
      : buildHandwashHtml(payload);

  await resend.emails.send({
    from: "orders@iwoodz.com",
    to: adminEmail,
    replyTo: payload.email,
    subject,
    html,
  });
}
