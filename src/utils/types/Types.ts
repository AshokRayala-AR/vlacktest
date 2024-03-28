import { z } from "zod";

export const IconSchama = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
});

export type IconType = z.infer<typeof IconSchama>;

export const IconPropSchama = z.object({
  item: IconSchama,
});

export type IconPropType = z.infer<typeof IconPropSchama>;
