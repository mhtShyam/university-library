import React from "react";
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import BookList from "@/components/BookList";
import { sampleBooks } from "@/constants";

const Page = () => {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
        className="mt-10"
      >
        <Button className="my-10">Logout</Button>
      </form>
      <BookList title="Borrowed books" books={sampleBooks} />
    </>
  );
};
export default Page;
