import Image from "next/image";
import laidback_entre from "../../assets/laidback_entre.png";
import lightbulb from "../../assets/lightbulb.png";
import team from "../../assets/team.png";
import statistics from "../../assets/statistics.png";
import brainstorm from "../../assets/brainstorm.png";
import meeting from "../../assets/meeting.png";
import rocket from "../../assets/rocket.png";
import React from "react";
import { FC } from "react";

const page: FC = () => {
  const styles = {
    outerContainer: "space-y-8 my-20  lg:space-y-14",
    headline: "capitalize simple-gradient font-bold text-4xl text-center",
    LeftContainer:
      "space-y-4 flex items-center justify-center flex-col lg:flex-row lg:justify-start lg:gap-8",
    RightContainer:
      "flex flex-col items-center justify-center space-y-4 lg:flex-row-reverse lg:justify-start lg:gap-8",
    paragraph: "text-base lg:w-1/2 lg:text-lg",
  };

  return (
    <article className={styles.outerContainer}>
      <h1 className={styles.headline}>our mission</h1>
      {/* first section container */}
      <div className={styles.LeftContainer}>
        <div className="relative w-full max-w-[350px] lg:max-w-[500px]">
          <Image
            src={laidback_entre}
            alt="laidback entrepreneur"
            priority
            style={{ objectFit: "contain" }}
            quality={100}
            sizes="(max-width: 1024px) 30vw, (min-width: 1024px) 25vw"
          />
        </div>
        <p className={styles.paragraph}>
          At Sky Ads, our mission is to empower businesses and brands to unleash
          their full potential on TikTok. We believe that TikTok presents a
          unique opportunity to connect with a global audience, drive growth,
          and make a lasting impact. Our goal is to provide exceptional TikTok
          advertising solutions that deliver real results, helping our clients
          achieve their business objectives and thrive in the ever-evolving
          digital landscape.
        </p>
      </div>
      <h1 className={styles.headline}>The Spark of Innovation</h1>
      {/* second section container */}
      <div className={`${styles.RightContainer} lg:text-right`}>
        <div className="relative w-full max-w-[290px] lg:max-w-[400px]">
          <Image
            src={lightbulb}
            alt="lightbulb style"
            style={{ objectFit: "contain" }}
            quality={100}
            sizes="(max-width: 1024px) 30vw, (min-width: 1024px) 25vw"
          />
        </div>
        <p className={styles.paragraph}>
          It all began with a spark of innovation. The founders of Sky Ads
          shared a common passion for exploring new frontiers in the digital
          marketing landscape. They were captivated by the rising popularity of
          TikTok and saw its immense potential as a platform for brands to
          connect with a global audience. This ignited their entrepreneurial
          spirit and set the foundation for what would become a transformative
          journey.
        </p>
      </div>
      <h1 className={styles.headline}>Assembling a Dream Team</h1>
      {/* third section container */}
      <div className={styles.LeftContainer}>
        <div className="relative w-full max-w-[350px] lg:max-w-[500px]">
          <Image
            src={team}
            alt="our tiktok ads team"
            style={{ objectFit: "contain" }}
            quality={100}
            sizes="(max-width: 1024px) 30vw, (min-width: 1024px) 25vw"
          />
        </div>
        <p className={styles.paragraph}>
          Realizing the magnitude of the opportunity, the founders knew they
          couldn&apos;t embark on this journey alone. They meticulously
          handpicked a team of talented experts from diverse backgrounds in
          marketing, advertising, and data analytics. Each team member brought
          unique skills and perspectives, united by a shared vision to redefine
          TikTok advertising and deliver exceptional results for clients.
        </p>
      </div>
      {/* fourth section container */}
      <h1 className={styles.headline}>Mastering the TikTok Landscape</h1>
      <div className={`${styles.RightContainer} lg:text-right`}>
        <div className="relative w-full max-w-[350px] lg:max-w-[500px]">
          <Image
            src={statistics}
            alt="statistics dashboard"
            style={{ objectFit: "contain" }}
            quality={100}
            sizes="(max-width: 1024px) 30vw, (min-width: 1024px) 25vw"
          />
        </div>
        <p className={styles.paragraph}>
          Sky Ads dove headfirst into mastering the intricacies of the TikTok
          landscape. They immersed themselves in research, analysis, and
          experimentation to understand the platform&apos;s algorithms, trends,
          and audience behavior. This relentless pursuit of knowledge allowed
          them to develop powerful strategies and methodologies that would drive
          tangible outcomes for their clients.
        </p>
      </div>
      <h1 className={styles.headline}>Crafting Tailor-Made Campaigns</h1>
      {/* fifth section container */}
      <div className={styles.LeftContainer}>
        <div className="relative w-full max-w-[350px] lg:max-w-[500px]">
          <Image
            src={brainstorm}
            alt="our team brainstorming strategies to achieve your goals"
            style={{ objectFit: "contain" }}
            quality={100}
            sizes="(max-width: 1024px) 30vw, (min-width: 1024px) 25vw"
          />
        </div>
        <p className={styles.paragraph}>
          One size doesn&apos;t fit all in the world of TikTok advertising. Sky
          Ads recognized the importance of crafting tailor-made campaigns that
          aligned with each client&apos;s unique goals, brand identity, and
          target audience. They dedicated time and effort to deeply understand
          their clients&apos; businesses, ensuring that every campaign they
          created would resonate, engage, and leave a lasting impact.
        </p>
      </div>
      <h1 className={styles.headline}>Transparency and Support</h1>
      {/* sixth section container */}
      <div className={`${styles.RightContainer} lg:text-right`}>
        <div className="relative w-full max-w-[350px] lg:max-w-[500px]">
          <Image
            src={meeting}
            alt="skype with our clients"
            style={{ objectFit: "contain" }}
            quality={100}
            sizes="(max-width: 1024px) 30vw, (min-width: 1024px) 25vw"
          />
        </div>
        <p className={styles.paragraph}>
          Sky Ads values transparency and open communication with their clients.
          They understood the importance of keeping clients informed about
          campaign performance, providing detailed reporting and analytics.
          Additionally, they fostered a culture of support, offering
          unparalleled guidance and assistance throughout the entire TikTok
          advertising journey. For Sky Ads, their clients&apos; success is their
          success.
        </p>
      </div>
      <h1 className={styles.headline}>Empowering Businesses on TikTok</h1>
      {/* 7th section container */}
      <div className={styles.LeftContainer}>
        <div className="relative w-full max-w-[350px] lg:max-w-[500px]">
          <Image
            src={rocket}
            alt="skyrocketing your businesse's sales with tiktok ads"
            style={{ objectFit: "contain" }}
            quality={100}
            sizes="(max-width: 1024px) 30vw, (min-width: 1024px) 25vw"
          />
        </div>
        <p className={styles.paragraph}>
          The story of Sky Ads is one of continuous evolution and growth. They
          remain at the forefront of industry trends, constantly adapting their
          strategies to harness the latest innovations and opportunities on
          TikTok. Their unwavering commitment to excellence and their
          clients&apos; success drives them to push boundaries, innovate, and
          shape the future of digital advertising on TikTok.
        </p>
      </div>
      <section className="flex flex-col justify-center items-center w-full gap-6 py-8 bg-[#0E0E0F] lg:py-16">
        <h1 className="text-4xl font-bold text-center lg:text-5xl">
          Join the Sky Ads Journey
        </h1>
        <p className="text-base text-center px-4 w-full lg:text-lg lg:w-[70%]">
          Today, Sky Ads invites you to join them on this remarkable journey.
          Experience the transformative power of TikTok advertising, guided by a
          team of experts who are passionate about your success. Together,
          let&apos;s unlock the full potential of TikTok and make your
          brand&apos;s story one that captivates, inspires, and resonates with
          audiences worldwide.
        </p>
        <button
          className="px-4 bg-[#D357FF] border-2 border-[#7F57FF] font-semibold text-center uppercase py-3 rounded-md  md:py-6 lg:px-6"
          aria-label="book a call now button"
        >
          book a call now! - it&apos;s free
        </button>
      </section>
    </article>
  );
};

export default page;
