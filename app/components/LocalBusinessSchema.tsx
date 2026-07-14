import { getLocalBusinessSchema } from "@/lib/localBusinessSchema";

type LocalBusinessSchemaProps = {
  path?: string;
};

export default function LocalBusinessSchema({ path = "" }: LocalBusinessSchemaProps) {
  const schema = getLocalBusinessSchema(path);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
