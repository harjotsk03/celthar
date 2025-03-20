import Layout from "../components/Layout";
import Hero from "../components/Home/Hero.js";
import WhoWeAre from "../components/Home/WhoWeAre";
import WhatWeOffer from "../components/Home/WhatWeOffer";
import WhoWeHaveHelped from "../components/Home/WhoWeHaveHelped";
export default function Home() {
  return (
    <Layout>
      <Hero />
      <WhoWeAre />
      <WhatWeOffer />
      <WhoWeHaveHelped />
    </Layout>
  );
}
