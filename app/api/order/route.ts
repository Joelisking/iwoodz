import { NextRequest, NextResponse } from "next/server";
import { orderSchema } from "@/lib/order-schema";
import { sendOrderEmail } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = orderSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    await sendOrderEmail(result.data);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[/api/order]", err);
    return NextResponse.json({ error: "Failed to send order" }, { status: 500 });
  }
}
