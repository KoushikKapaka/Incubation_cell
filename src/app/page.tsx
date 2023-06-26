import ImageFallback from "@/layouts/components/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";
import { Button, Feature } from "@/types";
import { FaCheck } from "react-icons/fa/index.js";

const Home = () => {
  const homepage = getListPage("_index.md");
  const testimonial = getListPage("sections/testimonial.md");
  const callToAction = getListPage("sections/call-to-action.md");
  const { frontmatter } = homepage;
  const {
    banner,
    features,
  }: {
    banner: {
      image: string;
    };
    features: Feature[];
  } = frontmatter;

  return (
    <>
      <SeoMeta />
      <section>
        {banner.image && (
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className=" pt-1 md:pb-1">
              <div className="md:pt-1">
                <ImageFallback
                  src={banner.image}
                  className="mx-auto h-auto w-full rounded-md bg-gray-400 "
                  sizes="(max-width: 64rem) 100vw, 1024px"
                  width="800"
                  height="400"
                  alt="GCET"
                  priority
                />
              </div>
            </div>
          </div>
        )}
      </section>
      {/* <section className="section pt-14">
        <div className="container">
          <div className="row justify-center">
            <div className="mb-16 text-center lg:col-7">
              <h1
                className="mb-4"
                dangerouslySetInnerHTML={markdownify(banner.title)}
              />
              <p
                className="mb-8"
                dangerouslySetInnerHTML={markdownify(banner.content ?? "")}
              />
              {banner.button!.enable && (
                <a className="btn btn-primary" href={banner.button!.link}>
                  {banner.button!.label}
                </a>
              )}
            </div>
            {banner.image && (
              <div className="col-12">
                <ImageFallback
                  src={banner.image}
                  className="mx-auto"
                  width="800"
                  height="420"
                  alt="banner image"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section> */}
      {/* <section className={"section-sm  bg-gradient "}>
        <div className="container ">
          <div className="row items-center justify-between">
            <div className={`mb:md-0 mb-6 md:col-5 `}>
              {/* <ImageFallback
                src={banner.main_image}
                height={480}
                width={520}
                alt={banner.title}
              /> */}
      {/* </div>
            <div className="text-justify md:col-7 lg:col-6">
              <h3 className="mb-3" dangerouslySetInnerHTML={markdownify("")} />
              <hr></hr>
              <p
                className="mt-1 mb-8 text-lg text-h5 font-sans font-medium"
                dangerouslySetInnerHTML={markdownify(banner.content ?? "")}
              />
            // </div> */}{" "}
      {/* <div className={`md:col-7 lg:col-6 `}>
              <h2
                className="mb-4"
                dangerouslySetInnerHTML={markdownify(feature.title)}
              />
              <p
                className="mb-8 text-lg"
                dangerouslySetInnerHTML={markdownify(feature.content)}
              />
              <ul>
                {feature.bulletpoints.map((bullet: string) => (
                  <li className="relative mb-4 pl-6" key={bullet}>
                    <FaCheck className={"absolute left-0 top-1.5"} />
                    <span dangerouslySetInnerHTML={markdownify(bullet)} />
                  </li>
                ))}
              </ul>
              {feature.button.enable && (
                <a className="btn btn-primary mt-5" href={feature.button.link}>
                  {feature.button.label}
                </a>
              )}
            </div> */}
      {/* </div>
        </div>
      </section> */}
      {features.map((feature, index: number) => (
        <section
          key={index}
          className={`section-sm ${index % 2 === 0 && "bg-gradient"}`}
        >
          <div className="container">
            <div className="row items-center justify-between">
              <div
                className={`mb:md-0 mb-6 md:col-5 ${
                  index % 2 !== 0 && "md:order-2"
                }`}
              >
                <ImageFallback
                  src={feature.image}
                  height={480}
                  width={520}
                  alt={feature.title}
                />
              </div>
              <div
                className={`text-justify md:col-7 lg:col-6 ${
                  index % 2 !== 0 && "md:order-1"
                }`}
              >
                <h3
                  className="mb-3"
                  dangerouslySetInnerHTML={markdownify(feature.title)}
                />
                <p
                  className="mt-1 mb-8 text-lg text-h5 font-sans font-medium"
                  dangerouslySetInnerHTML={markdownify(feature.content)}
                />
                {/* <ul>
                  {feature.bulletpoints.map((bullet: string) => (
                    <li className="relative mb-4 pl-6" key={bullet}>
                      <FaCheck className={"absolute left-0 top-1.5"} />
                      <span dangerouslySetInnerHTML={markdownify(bullet)} />
                    </li>
                  ))}
                </ul> */}
                {/* {feature.button.enable && (
                  <a
                    className="btn btn-primary mt-5"
                    href={feature.button.link}
                  >
                    {feature.button.label}
                  </a>
                )} */}
              </div>
            </div>
          </div>
        </section>
      ))}
      {/* <Testimonials data={testimonial} />
      <CallToAction data={callToAction} /> */}
    </>
  );
};

export default Home;
