import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DirectionDetail } from "@/features/directions/direction-detail";
import { DirectionsHeader } from "@/features/directions/directions-header";
import { sampleDirections } from "@/features/directions/sample-directions";

type Props = PageProps<"/create/directions/[directionId]">;

export function generateStaticParams() {
  return sampleDirections.map(({ id }) => ({ directionId: id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { directionId } = await params;
  const direction = sampleDirections.find(({ id }) => id === directionId);
  return { title: `${direction?.title ?? "Direction not found"} | Mood for Thought` };
}

export default async function DirectionDetailPage({ params }: Props) {
  const { directionId } = await params;
  const position = sampleDirections.findIndex(({ id }) => id === directionId);
  const direction = sampleDirections[position];
  if (!direction) notFound();

  return (
    <>
      <DirectionsHeader showAllDirections />
      <DirectionDetail direction={direction} position={position + 1} total={sampleDirections.length} />
    </>
  );
}
