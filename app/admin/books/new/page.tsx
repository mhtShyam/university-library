import React from "react";
import { Button } from "@/components/ui/button";
import LinK from "next/link";
import BookForm from "@/components/admin/forms/BookForm";

const Page = () => {
  return (
    <>
      <Button className="back-btn" asChild>
        <LinK href="/admin/books">Go Back</LinK>
      </Button>
      <section className="w-full max-w-2xl">
        <BookForm />
      </section>
    </>
  );
};
export default Page;
