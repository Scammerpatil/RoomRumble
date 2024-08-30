import { NextRequest, NextResponse } from "next/server";
import { rooms } from "@/lib/rooms";

export async function POST(req: NextRequest) {
  const { roomID, passcode, playerName } = await req.json();
  if (!rooms[roomID]) {
    return NextResponse.json({ error: "Room not found" }, { status: 404 });
  }

  if (rooms[roomID].passcode !== passcode) {
    return NextResponse.json({ error: "Invalid passcode" }, { status: 403 });
  }

  if (rooms[roomID].players.length >= 10) {
    return NextResponse.json({ error: "Room is full" }, { status: 400 });
  }

  rooms[roomID].players.push(playerName);
  NextResponse.json({ success: true }, { status: 200 });
}
