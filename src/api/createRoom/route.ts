import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";
import { rooms } from "@/lib/rooms";

export async function POST(req: NextRequest) {
  const passcode = Math.floor(1000 + Math.random() * 9000);
  const roomID = nanoid(6);
  rooms[roomID] = { passcode, players: [] };
  NextResponse.json({ roomID, passcode }, { status: 201 });
}
