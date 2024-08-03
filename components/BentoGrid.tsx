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
    setShowBento(
      window.localStorage.getItem("showBento") === "true" ? true : false,
    );
  }, []);

  return (
    <div className={styles.BentoGrid}>
      <span className={styles.sectionTitle}>PROJECTS</span>
      <ProjectBento
        link={"https://github.com/Adriantobi/dotfiles/"}
        title={"Neovim Config"}
        description={
          "A neovim configuration built using kickstart.nvim and specialised to suit my needs as a developer."
        }
        images={[
          "/nvimConfig1.png",
          "/nvimConfig2.png",
          "/nvimConfig3.png",
          "/nvimConfig4.png",
        ]}
        unoptimized={true}
      />
      <ProjectBento
        link={"https://github.com/Adriantobi/cuery/"}
        title={"Cuery CLI Tool"}
        description={
          "Cuery is a versatile command line utility designed to streamline the execution of commands by leveraging aliases stored in a configuration file."
        }
        images={["/cueryCliTool.gif"]}
        unoptimized={true}
      />
      <ProjectBento
        link={"https://nooodle.vercel.app/app"}
        title={"Noodle"}
        description={
          "Noodle is a study platform that allows you to choose from a variety of spaces, as well as listen to spotify and set tasks."
        }
        images={["/noodle.png"]}
      />
      {/* <ProjectBento link={'https://travel-tempo.vercel.app/'} title={'Weather App'} description={'A React-powered Weather App, your go-to tool for weather updates and local exploration by helping you uncover nearby tourist attractions.'} images={'/weatherApp.png'} /> */}
      <ProjectBento
        link={"http://ce-wallington.vercel.app/"}
        title={"Christ Embassy Wallington"}
        description={
          "A church website built using Nextjs and prisma to display news and announcements."
        }
        images={["/christEmbassyWallington.png"]}
      />
      <ProjectBento
        link={"https://www.epsomandewellhub.com/"}
        title={"Epsom And Ewell Hub"}
        description={
          "A redesign and development of the Epsom and Ewell Hub official website, built using Wix."
        }
        images={["/epsomAndEwellHub.png"]}
      />
      <ProjectBento
        link={"https://photos.adriantd.com/"}
        title={"Photography Portfolio"}
        description={"A simple portfolio to display my film photography."}
        images={["/photographyPortfolio1.png", "/photographyPortfolio2.png"]}
      />
      <ProjectBento
        link={"https://v2.adriantd.com/"}
        title={"adriantd.com (v2)"}
        description={
          "A recent portfolio built using Nextjs displaying skills and experience. Styled using CSS Modules and deployed with vercel."
        }
        images={["/adriansPortfoliov2.png"]}
      />
      <ProjectBento
        link={"https://v1.adriantd.com/"}
        title={"adriantd.com (v1)"}
        description={
          "A HTML portfolio, crafted in 2022. Witness the raw code and pixel-perfect design that fueled my early web development journey."
        }
        images={["/adriansPortfoliov1.png"]}
      />
      <ProjectBento
        link={"https://v0.adriantd.com/"}
        title={"adriantd.com (v0)"}
        description={
          "No frameworks, no plugins, just HTML. This hand-coded portfolio from 2019 is a testament to my dedication and understanding of the web's building blocks."
        }
        images={["/adriansPortfoliov0.jpg"]}
      />
      <span className={styles.sectionTitle}>EXPERIENCE</span>
      <JobBento
        icon={
          "https://media.licdn.com/dms/image/C4D0BAQEU1YtNwozLbQ/company-logo_200_200/0/1630538156604/jeffreyai_logo?e=1730937600&v=beta&t=2zG5X0vxEopovSmhdGZdSrgvonwJel6x6Z-EQMUx0zk"
        }
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
        ]}
      />
      <JobBento
        icon={
          "https://media.licdn.com/dms/image/D4E0BAQHtjb8OgAe35w/company-logo_200_200/0/1688725653268/carbonandfinch_logo?e=1729728000&v=beta&t=hCZNCaqJ-0mVHdyUSUMn_4zSeWS65hZ5378OXVbc96o"
        }
        link={"https://www.carbonandfinch.com/"}
        start={"JAN 2024"}
        end={"MAR 2024"}
        role={"X++ Developer"}
        type={"Full Time"}
        company={"Carbon & Finch"}
        desc={
          "Identified and resolved bugs or errors within Dynamics AX or Dynamics 365 business applications. Also implemented new features and tailored existing modules to align with specific business processes or workflows."
        }
        tech={["X++", "Azure", "Microsoft Dynamics 365"]}
      />
      <JobBento
        icon={
          "https://media.licdn.com/dms/image/D560BAQFHwiQouD_01A/company-logo_200_200/0/1681903283657/epsom_ewell_hub_logo?e=1729728000&v=beta&t=rrlrEn1KL_1NKgOJKi8yZHDgSw_rZvbmtHVrVR6GjZs"
        }
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
        icon={
          "https://media.licdn.com/dms/image/D560BAQHkiLWOxOvJ_g/company-logo_200_200/0/1690172518168/moreton_bay_regional_council_logo?e=1722470400&v=beta&t=9IQ5BMezLuNowT6XxKk-lLJas27VKbTyKdPB6KVjszw"
        }
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
        icon={
          "https://media.licdn.com/dms/image/C4D0BAQGOMVo5-P5IHg/company-logo_200_200/0/1674468940363/wedancevip_logo?e=1730937600&v=beta&t=Xkym9IxcAhrOQiQ9a9q64bPwyOigp-Kzt_NN5JEsPl0"
        }
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
        icon={
          "https://media.licdn.com/dms/image/C4E0BAQHm5bYK6emQSg/company-logo_200_200/0/1630621204188/goldman_sachs_logo?e=1729728000&v=beta&t=TwqPwdw5DKvqxCE-DqPqEs8r_D-jxG6_0-zHFyyAjNY"
        }
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
        icon={
          "https://media.licdn.com/dms/image/C4E0BAQFN7ZGRjNcgeA/company-logo_400_400/0/1656681489601/jpmorganchase_logo?e=2147483647&v=beta&t=Cri68t3YNEgTwG2_BhKNbNhutV5x8Te9OWg2G31m5Es"
        }
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
            icon={
              "https://media.licdn.com/dms/image/C4E0BAQFt6KqGwvGCzg/company-logo_200_200/0/1652805738201/instagram_logo?e=1729728000&v=beta&t=OEzc6x-MO9v1fwDENluZYS5BACv16rucndDWubvWKZ4"
            }
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
            icon={
              "https://media.licdn.com/dms/image/C560BAQFmuLSyL1nlPA/company-logo_200_200/0/1678231359043/github_logo?e=1729728000&v=beta&t=VwyJBs3ugcsZdA1yQBPF6Bydd3mYqsEGWQ_D-YdYSnI"
            }
            size="2x1"
            header={"GitHub"}
            subheader={"@AdrianTobi"}
            buttonContent={"Follow"}
            buttonColour={"35, 35, 35"}
          />
          <GridItem
            type={"social"}
            link={"https://twitter.com/adriantdoav"}
            icon={
              "https://media.licdn.com/dms/image/D560BAQHQCdS1oXcD2Q/company-logo_200_200/0/1691021621180?e=1729728000&v=beta&t=pz9NqhbJbKckxCThSjEX_sAEaomDKdHwaD_CWVrnPA0"
            }
            size="2x1"
            header={"X"}
            subheader={"@adriantdoav"}
            buttonContent={"Follow"}
            buttonColour={"35, 35, 35"}
          />
          <GridItem
            type={"social"}
            link={"https://www.linkedin.com/in/adriantd"}
            icon={
              "https://media.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_200_200/0/1638831590218/linkedin_logo?e=1729728000&v=beta&t=cPMdHxGk-ScEWCAZBuGGFxq1X9SsTU-1C-hHKLXORmo"
            }
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
            icon={
              "https://media.licdn.com/dms/image/C510BAQFymtI6HMvF0A/company-logo_200_200/0/1631361161136?e=1729728000&v=beta&t=2IcAOQt1xB0Jcvn7jMegllWZGPjlYosb7oU0Q9VO3gM"
            }
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
            icon={
              "https://media.licdn.com/dms/image/C560BAQG0MvELPXwlkQ/company-logo_200_200/0/1630861157743/_logo?e=1729728000&v=beta&t=bdVslIm4A0Q1FavGRSAwP6-bBogeh-dGVtUeelMZFfs"
            }
            size="2x1"
            header={"Weibo"}
            subheader={"@adriantobi"}
            buttonContent={"Follow"}
            buttonColour={"231, 0, 18"}
          />
          <GridItem
            type={"social"}
            link={"https://letterboxd.com/adriantd"}
            icon={
              "https://media.licdn.com/dms/image/C560BAQE7vwWktMc_Sw/company-logo_200_200/0/1630615178595?e=1729728000&v=beta&t=W1j9rhY8sJV3wztp3y4uYIRa-LRJH2NuS2JB5Ax_aGA"
            }
            size="2x1"
            header={"Letterboxd"}
            subheader={"@adriantd"}
            buttonContent={"Follow"}
            buttonColour={"82, 100, 118"}
          />
        </>
      ) : null}
    </div>
  );
}
