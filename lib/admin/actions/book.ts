"use server";

import { db } from "@/database/drizzle";
import { books } from "@/database/schema";

export const createBook = async (params: BookParams) => {
  try {
    const newbook = await db
      .insert(books)
      .values({
        ...params,
        availableCopies: params.totalCopies,
      })
      .returning();

    return {
      success: true,
      message: "Book created successfully",
      data: JSON.parse(JSON.stringify(newbook[0])),
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      message: "An error occurred while creating the book",
      error: e,
    };
  }
};
