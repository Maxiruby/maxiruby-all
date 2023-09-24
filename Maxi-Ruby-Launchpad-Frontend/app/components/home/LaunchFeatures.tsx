// components
import { Container, Section } from "~/components/Layout";

// config
import { Features } from "~/config/meta.config";

// types
import type { Feature as FeatureType } from "~/types/meta.types";
import { cn } from "~/utils/cn";

export default function LaunchFeatures() {
  return (
    <Section>
      <Container>
        <div className="flex flex-1 flex-row flex-wrap justify-between items-start gap-24">
          <h2 className="text-foreground font-medium font-heading">
            <span className="text-[max(3vw,26px)]">Launch Your</span>
            <br />
            <span className="text-[max(2.8vw,24px)]">Tokens with</span>
          </h2>

          <div className="columns-1 md:columns-2 items-start gap-5">
            {Features.map((feature, index) => (
              <Feature key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Feature({ feature, index }: { feature: FeatureType; index: number }) {
  return (
    <div
      className={cn(
        "flex flex-1 flex-col min-w-[320px] max-w-[360px] bg-secondary/20 rounded-2xl p-8 mb-5 gap-y-5",
        {
          "mt-0 md:mt-6": index === 0,
        }
      )}
    >
      <header className="flex items-start justify-start gap-x-4">
        <span className="flex w-1 h-8 bg-accent rounded-md" />

        <strong className="text-xl">{feature.title}</strong>
      </header>

      <main className="flex flex-col gap-y-6">
        <p className="text-muted-foreground">{feature.description}</p>

        <div className="flex flex-col gap-y-3">
          <div className="flex items-start justify-start gap-x-2">
            <span className="flex w-1 h-1 bg-accent rounded-full" />
            <span className="text-xl leading-none">{feature.count}</span>
          </div>

          <span className="text-sm text-muted-foreground font-medium">
            {feature.mark}
          </span>
        </div>
      </main>
    </div>
  );
}
