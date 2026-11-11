"use client";

import { createContext, useContext, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";

type BriefDraft = {
  brief: string;
  types: string[];
};

export const emptyBrief: BriefDraft = { brief: "", types: ["Branding"] };

const BriefDraftContext = createContext<{
  draft: BriefDraft;
  setDraft: Dispatch<SetStateAction<BriefDraft>>;
} | null>(null);

export function BriefDraftProvider({ children }: { children: ReactNode }) {
  const [draft, setDraft] = useState(emptyBrief);

  return (
    <BriefDraftContext value={{ draft, setDraft }}>
      {children}
    </BriefDraftContext>
  );
}

export function useBriefDraft() {
  const context = useContext(BriefDraftContext);
  if (!context) throw new Error("The brief draft requires a BriefDraftProvider.");
  return context;
}
