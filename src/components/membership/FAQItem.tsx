"use client";

import { useState } from "react";

export default function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b py-6 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <h4 className="text-xl text-primary">{question}</h4>
        <span>{open ? "-" : "+"}</span>
      </div>

      {open && (
        <p className="mt-3 text-primary/70 max-w-[800px]">
          {answer}
        </p>
      )}
    </div>
  );
}