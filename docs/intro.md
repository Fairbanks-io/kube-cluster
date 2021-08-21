---
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Intro

<p align="center">

  <img width="300" src={useBaseUrl('/img/main.svg')} alt="kube-cluster-logo-alt"  />

</p>

With the introduction of the public cloud, the way software is developed has been undergoing significant change. 

Whereas in the past it was common to install services directly on bare-metal boxes in an on-prem data center, Docker and Kubernetes have transformed software deployment strategies.

Within this documentation you will find a collection of learnings gathered across a few years of trying to understand how can software be written, deployed and upgraded using these new strategies all while ensuring maximum availability for end-users.

#### Code Best Practices

It all starts with quality code. From language best practices to unit testing, all of these best practices help ensure whatever you deploy is built with quality in mind.

To learn more, checkout the [Code Best Practices](./code-best-practices/intro.md) section

#### Containerization

Application deployments should be short-lived and platform agnostic. Containers can help stand-up the exact same app experience, every time.

To learn more, checkout the [Containerization](./containerization/intro.md) section

#### Deployments

Maximum availability for your code using the latest in k8s native and CNCF backed technologies.

To learn more, checkout the [Deployments](./deployments/intro.md) section

#### Automation

If you have to do it more than once, automate it! Reduce toil so that you can focus on what matters.

To learn more, checkout the [Automation](./automation/intro.md) section

#### Resources

Want to dive even deeper on these topics? Checkout the [Resources](./resources/index.md) section for links to books, videos, roadmaps and more which were the basis for this documentation.