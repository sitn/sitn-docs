import clsx from "clsx";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "API REST",
    Svg: require("@site/static/img/undraw_bibliophile_re_xarc.svg").default,
    description: (
      <>
        Documentation technique des services REST de l'API du SITN. Destiné aux
        développeurs souhaitant intégrer ces services dans leurs applications
      </>
    ),
    link: "/docs/api"
  },
  {
    title: "Exemples fonctionnels",
    Svg: require("@site/static/img/undraw_science_re_mnnr.svg").default,
    description: (
      <>
        Parcourez les exemples live de mise en oeuvre des services du SITN.
      </>
    ),
    link: "/docs/examples"
  },
];

function Feature({ title, Svg, description, link }: FeatureItem) {
  return (
    <div className={clsx("col col--6")}>
      <Link to={link}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
      </Link>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
