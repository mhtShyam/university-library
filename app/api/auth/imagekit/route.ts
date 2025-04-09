import ImageKit from "imagekit";
import config from "@/lib/config";
import { NextResponse } from "next/server";

const {
  env: {
    imagekit: { publicKey, privateKey, urlEndpoint },
  },
} = config;

const imageKit = new ImageKit({
  publicKey,
  privateKey,
  urlEndpoint,
});

console.log("abc=>", publicKey, privateKey, urlEndpoint, imageKit);

export async function GET() {
  return NextResponse.json(imageKit.getAuthenticationParameters());
}
