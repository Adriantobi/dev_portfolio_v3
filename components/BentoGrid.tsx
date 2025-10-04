"use client";

import { useEffect, useState } from "react";
import styles from "../css/components/bentogrid.module.css";
import GridItem from "./GridItem";
import JobBento from "./JobBento";
import ProjectBento from "./ProjectBento";
import TextLink from "./TextLink";

export default function BentoGrid() {
  const [showBento, setShowBento] = useState<boolean>();

  const changeBento = () => {
    setShowBento(!showBento);
    localStorage.setItem("showBento", JSON.stringify(!showBento));
  };

  useEffect(() => {
    const localBento = window.localStorage.getItem("showBento");
    setShowBento(localBento === "true" || localBento === null ? true : false);
  }, []);

  return (
    <div className={styles.BentoGrid}>
      <span className={styles.sectionTitle}>EXPERIENCE</span>
      <JobBento
        icon={"/images/companies/jeffreyai_logo.jpg"}
        link={"https://www.jeffreyai.com/"}
        start={"MAR 2024"}
        end={"PRESENT"}
        role={"Angular Developer"}
        type={"Full Time"}
        company={"JeffreyAI"}
        desc={
          "As a front-end Angular developer, I craft a seamless user experience, from design to performance. I turn concepts into interactive interfaces, build reusable components, and ensure everything runs smoothly."
        }
        tech={[
          "Angular",
          "Typescript",
          "Figma",
          "React",
          "Azure DevOps",
          "Plasmo",
          "Sass",
          "Tailwind",
          "Next.js",
          "SQL",
        ]}
      />
      <JobBento
        icon={"/images/companies/carbonandfinch_logo.jpg"}
        link={"https://www.carbonandfinch.com/"}
        start={"JAN 2024"}
        end={"MAR 2024"}
        role={"X++ Developer"}
        type={"Full Time"}
        company={"Carbon & Finch"}
        desc={
          "Identified and resolved bugs or errors within Dynamics AX or Dynamics 365 business applications. Also implemented new features and tailored existing modules to align with specific business processes or workflows."
        }
        tech={["X++", "Azure", "Microsoft Dynamics 365", "C#"]}
      />
      <JobBento
        icon={"/images/companies/epsom_ewell_hub_logo.jpg"}
        link={"https://www.epsomandewellhub.com/"}
        start={"JULY 2023"}
        end={"SEP 2023"}
        role={"Web Developer"}
        type={"Volunteer"}
        company={"Epsom & Ewell Hub"}
        desc={
          "Applied Wix and JavaScript proficiency to elevate a critical job-seeking platform, channeling a passion for coding and community impact. Worked collaboratively with a designer to integrate UI elements seamlessly, utilizing the Wix drag-and-drop interface and code editor."
        }
        tech={["JavaScript", "Wix"]}
      />
      <JobBento
        icon={"/images/companies/moreton_bay_regional_council_logo.jpg"}
        link={
          "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Moreton%20Bay%20Regional%20Council/7q8DN5enMzSHqLwev_Moreton%20Bay%20Regional%20Council_u2pPtAhxvS8oQHQfT_1681464876569_completion_certificate.pdf"
        }
        start={"MAR 2023"}
        end={"APR 2023"}
        role={"Web Developer"}
        type={"Virtual Experience"}
        company={"Moreton Bay"}
        desc={
          "From planning the website to creating a form section for user input. Explore UI/UX design for end users and further polished my web development skills."
        }
        tech={["Figma", "CSS", "HTML", "JavaScript"]}
      />
      <JobBento
        icon={"/images/companies/wedancevip_logo.jpg"}
        link={"https://www.wedance.vip"}
        start={"JULY 2022"}
        end={"SEP 2022"}
        role={"Front-end Developer"}
        type={"Internship"}
        company={"WeDance"}
        desc={
          "Used Vue.js to fix bugs given by various tickets on the github codebase. Helped in designing and building the new WeDance version."
        }
        tech={["Vue.js", "CSS", "TypeScript"]}
      />
      <JobBento
        icon={"/images/companies/goldman_sachs_logo.jpg"}
        link={
          "https://insidesherpa.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_u2pPtAhxvS8oQHQfT_1629113234515_completion_certificate.pdf"
        }
        start={"AUG 2021"}
        end={"AUG 2021"}
        role={"Software Engineer"}
        type={"Virtual Experience"}
        company={"Goldman Sachs"}
        desc={
          "Cracked leaked password database that had different hashing types like SHA-256, MD5 etc. Using services like hashcat to run the passwords through different hashing algorithms and crack them using methods such as brute force."
        }
        tech={["Hashcat", "Cryptography"]}
      />
      <JobBento
        icon={"/images/companies/jpmorganchase_logo.jpg"}
        link={
          "https://insidesherpa.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_JPMorgan%20Chase_u2pPtAhxvS8oQHQfT_1629460325328_completion_certificate.pdf"
        }
        start={"JULY 2021"}
        end={"AUG 2021"}
        role={"Software Engineer"}
        type={"Virtual Work Experience"}
        company={"JPMorgan"}
        desc={
          "Created and interface with a stock price data feed. Used JPMorgan Chase frameworks and tools. Displayed data visually for traders."
        }
        tech={["Typescript", "React", "Python", "JavaScript", "Git"]}
      />
      <span className={styles.sectionTitle}>PROJECTS</span>
      <ProjectBento
        link={"https://github.com/Adriantobi/dotfiles/"}
        title={"Neovim Config"}
        description={
          "A neovim configuration built using kickstart.nvim and specialised to suit my needs as a developer."
        }
        images={[
          "/images/projects/nvimConfig1.png",
          "/images/projects/nvimConfig2.png",
          "/images/projects/nvimConfig3.png",
          "/images/projects/nvimConfig4.png",
        ]}
        unoptimized={true}
      />
      <ProjectBento
        link={"https://www.npmjs.com/package/rbbt-client"}
        title={"RBBT Client"}
        description={
          "RBBTClient is a JavaScript library designed for seamless interaction with RabbitMQ over WebSockets."
        }
        images={["/images/projects/rbbtClient.png"]}
      />
      <ProjectBento
        link={"https://github.com/Adriantobi/cuery/"}
        title={"Cuery CLI Tool"}
        description={
          "Cuery is a versatile command line utility designed to streamline the execution of commands by leveraging aliases stored in a configuration file."
        }
        images={["/images/projects/cueryCliTool.gif"]}
        unoptimized={true}
      />
      <ProjectBento
        link={"https://nooodle.vercel.app/app"}
        title={"Noodle"}
        description={
          "Noodle is a study platform that allows you to choose from a variety of spaces, as well as listen to spotify and set tasks."
        }
        images={["/images/projects/noodle.png"]}
      />
      {/* <ProjectBento link={'https://travel-tempo.vercel.app/'} title={'Weather App'} description={'A React-powered Weather App, your go-to tool for weather updates and local exploration by helping you uncover nearby tourist attractions.'} images={'/weatherApp.png'} /> */}
      <ProjectBento
        link={"http://ce-wallington.vercel.app/"}
        title={"Christ Embassy Wallington"}
        description={
          "A church website built using Nextjs and prisma to display news and announcements."
        }
        images={["/images/projects/christEmbassyWallington.png"]}
      />
      <ProjectBento
        link={"https://monstr.ofneill.com/"}
        title={"Monstr"}
        description={
          "Monstr is a web-based chat application that allows users to create and join disposable chat rooms."
        }
        images={["/images/projects/monstr.png"]}
      />

      <ProjectBento
        link={"https://www.epsomandewellhub.com/"}
        title={"Epsom And Ewell Hub"}
        description={
          "A redesign and development of the Epsom and Ewell Hub official website, built using Wix."
        }
        images={["/images/projects/epsomAndEwellHub.png"]}
      />
      <ProjectBento
        link={"https://photos.adriantd.com/"}
        title={"Photography Portfolio"}
        description={"A simple portfolio to display my film photography."}
        images={[
          "/images/projects/photographyPortfolio1.png",
          "/images/projects/photographyPortfolio2.png",
        ]}
      />
      <ProjectBento
        link={"https://v2.adriantd.com/"}
        title={"adriantd.com (v2)"}
        description={
          "A recent portfolio built using Nextjs displaying skills and experience. Styled using CSS Modules and deployed with vercel."
        }
        images={["/images/projects/adriansPortfoliov2.png"]}
      />
      <ProjectBento
        link={"https://v1.adriantd.com/"}
        title={"adriantd.com (v1)"}
        description={
          "A HTML portfolio, crafted in 2022. Witness the raw code and pixel-perfect design that fueled my early web development journey."
        }
        images={["/images/projects/adriansPortfoliov1.png"]}
      />
      <ProjectBento
        link={"https://v0.adriantd.com/"}
        title={"adriantd.com (v0)"}
        description={
          "No frameworks, no plugins, just HTML. This hand-coded portfolio from 2019 is a testament to my dedication and understanding of the web's building blocks."
        }
        images={["/images/projects/adriansPortfoliov0.jpg"]}
      />
      <span className={styles.more}>
        <TextLink
          title={`${showBento ? "Hide" : "Show"} bento board`}
          toDo={changeBento}
        />
      </span>
      {showBento ? (
        <>
          <GridItem
            type={"social"}
            link={"https://instagram.com/adrian.td"}
            icon={"/images/socials/instagram_logo.jpg"}
            size="2x2"
            header={"Instagram"}
            subheader={"@adrian.td"}
            content={"I shoot film"}
            buttonContent={"Follow"}
            buttonColour={"255, 0, 121"}
          />
          <GridItem
            type={"social"}
            link={"https://github.com/Adriantobi"}
            icon={"/images/socials/github_logo.jpg"}
            size="2x1"
            header={"GitHub"}
            subheader={"@AdrianTobi"}
            buttonContent={"Follow"}
            buttonColour={"35, 35, 35"}
          />
          <GridItem
            type={"social"}
            link={"https://twitter.com/adriantdoav"}
            icon={"/images/socials/x_logo.jpg"}
            size="2x1"
            header={"X"}
            subheader={"@adriantdoav"}
            buttonContent={"Follow"}
            buttonColour={"35, 35, 35"}
          />
          <GridItem
            type={"social"}
            link={"https://www.linkedin.com/in/adriantd"}
            icon={"/images/socials/linkedin_logo.jpg"}
            size="2x2"
            header={"LinkedIn"}
            subheader={"@adriantd"}
            content={"Student at Queen Mary University of London"}
            buttonContent={"Connect"}
            buttonColour={"11, 101, 195"}
          />
          <GridItem
            type={"social"}
            link={
              "https://www.xiaohongshu.com/user/profile/616c9247000000000201ca3e"
            }
            icon={"/images/socials/xiaohongshu_logo.jpg"}
            size="2x4"
            header={"小红书"}
            subheader={"@adrian.td"}
            content={"life is one big conundrum."}
            buttonContent={"Follow"}
            buttonColour={"244, 10, 11"}
            bgImage={
              "https://lh3.googleusercontent.com/pw/AP1GczNJgbOnZVtg7pf-asKYwQBxMOYCrx8Ineoe8sPfmZerlUd3VX3uMmv2XWTskNuzBoAe-HSrA7D9qx0hWYowGMMYO8wqRQeI6v7wZMdXCs9tu9pBDh6R=w2400"
            }
          />
          <GridItem
            type={"social"}
            link={"https://weibo.com/u/7696376222?ssl_rnd=1660044172.0373"}
            icon={"/images/socials/weibo_logo.jpg"}
            size="2x1"
            header={"Weibo"}
            subheader={"@adriantobi"}
            buttonContent={"Follow"}
            buttonColour={"231, 0, 18"}
          />
          <GridItem
            type={"social"}
            link={"https://youtube.com/@adriantdoav"}
            icon={"/images/socials/youtube_logo.jpg"}
            size="2x1"
            header={"YouTube"}
            subheader={"@adriantdoav"}
            buttonContent={"Follow"}
            buttonColour={"254, 0, 50"}
          />
        </>
      ) : null}
    </div>
  );
}
