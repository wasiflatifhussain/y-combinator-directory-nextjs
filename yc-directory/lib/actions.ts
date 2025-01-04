"use server";

import { auth } from "@/auth";
import { parseServerActionResponse } from "./utils";
import slugify from "slugify";
import { writeClient } from "@/sanity/lib/write-client";

export const createPitch = async (state: any, form: FormData, pitch: string) => {
  const session = await auth();
  
  if (!session) {
    return parseServerActionResponse({status: "ERROR", error: "Not Signed In"});
  }

  const { title, description, category, link } = Object.fromEntries(
    Array.from(form).filter(([key]) => key !== "pitch")
  );

  // need slug for each post for sanity; use slugify package
  const slug = slugify(title as string, { lower: true, strict: true });

  try {
    const startup = {
      title,
      description,
      category,
      image: link,
      pitch,
      slug: {
        _type: slug,
        current: slug,
      },
      author: {
        _type: "reference",
        _ref: session?.id,
      }
    };

    const result = await writeClient.create({_type: "startup", ...startup});
    return parseServerActionResponse({
      ...result,
      error: '',
      status: "SUCCESS",
    })
  }
  catch (error) {
    console.error(error);
    return parseServerActionResponse({status: "ERROR", error: JSON.stringify(error)});
  }
  
}