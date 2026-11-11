import { BriefDraftProvider } from "@/features/briefs/brief-draft";

export default function CreateLayout({ children }: LayoutProps<"/create">) {
  return <BriefDraftProvider>{children}</BriefDraftProvider>;
}
