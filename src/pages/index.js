import React from "react"
import ProjectCard from "../components/cards/ProjectCard"
import SkillCard from "../components/cards/SkillCard"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import ConnectSection from "../components/section/ConnectSection"
import HeroSection from "../components/section/HeroSection"
import SkillSection from "../components/section/SkillSection"
import WorkSection from "../components/section/WorkSection"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <SkillSection />
      <SkillCard />
      <WorkSection />
      <ProjectCard />
      <ConnectSection />
    </Layout>
  )
}

export default IndexPage
