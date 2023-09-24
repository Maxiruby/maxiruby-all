// components
import { Container, Section } from "~/components/Layout";
import Image from "~/components/shared/Image";

// config
import { Partners as PartnersConfig } from "~/config/meta.config";

export default function Partners() {
  return (
    <Section className="pt-24 pb-16">
      <Container>
        <div className="flex flex-1 flex-col py-8 px-6 gap-y-8 rounded-2xl bg-card">
          <h5 className="uppercase text-accent font-medium text-center">
            Lorem ipsum dolor sit amet consectetur amet consectetur
          </h5>
          <ul className="flex flex-1 flex-row flex-wrap gap-x-6 gap-y-8">
            {PartnersConfig.map((p) => (
              <li
                key={p.partner}
                className="flex flex-1 flex-col items-center justify-center min-w-[96px]"
              >
                <Image src={p.source} alt={p.partner} objectFit="contain" />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
