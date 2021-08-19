import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Cloud First',
    Svg: require('../../static/img/cloud.svg').default,
    description: (
      <>
        Built using the latest in CNCF backend technologies, this setup allows
        the entire cluster to be rebuilt anywhere at the click of a button.

        Google Cloud, Azure, AWS, DigitalOcean, on-prem and more!
      </>
    ),
  },
  {
    title: 'Enable Continous Deployments',
    Svg: require('../../static/img/gitops.svg').default,
    description: (
      <>
        Following GitOps principles allows the state of the cluster to be declared
        and managed in GitHub and continuously reconciled with Kubernetes releases.
      </>
    ),
  },
  {
    title: 'Auto Scaling and Remediation',
    Svg: require('../../static/img/automation.svg').default,
    description: (
      <>
        Prevent user downtime and impact by utilizing k8s native rolling upgrades, 
        post-release health checks and utilization based auto-scaling of deployments.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
