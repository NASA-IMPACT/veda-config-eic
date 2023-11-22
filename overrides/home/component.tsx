import React from "$veda-ui/react";
import { Link } from "$veda-ui/react-router-dom";
import styled from "$veda-ui/styled-components";
import { glsp, themeVal, media } from "$veda-ui/@devseed-ui/theme-provider";
import { Button } from "$veda-ui/@devseed-ui/button";
import Hug from "$veda-ui-scripts/styles/hug";
import {
  Fold,
  FoldHeader,
  FoldTitle,
  FoldBody,
  FoldHeadline,
  FoldHeadActions,
} from "$veda-ui-scripts/components/common/fold";
import { StyledVarHeading } from "../common/style";
import { variableGlsp } from "$veda-ui-scripts/styles/variable-utils";
import ThemeCards from "../components/theme-cards";
import { themeLandingPageIds } from "../common/story-data";
import { ExpandLink } from "./expand-link";

import Partners from "./partners";
import RedEarthImg from "./media/earth-1.png";

const IntroHeadline = styled(Hug)`
  display: flex;
  gap: ${glsp(2)};
  grid-column: content-start / content-end;

  ${media.largeUp`
    grid-column: content-2 / content-12;
    flex-flow: row;
  `}

  ${media.mediumDown`
    flex-flow: column;
  `}
  
  p {
    font-size: 1.25rem;
    padding-top: 1rem;
  }

  span {
    color: ${themeVal("color.primary")};
  }
`;

const HomeDescription = styled(Hug)`
  padding: ${variableGlsp(2.5, 0)};
  grid-row-gap: ${variableGlsp(2)};
  background: ${themeVal("color.info-100")};

  ${media.mediumUp`
    grid-row-gap: ${variableGlsp(3)};
  `}
`;
const IntroDesc = styled.div`
  ${media.largeUp`
    grid-column: -1/1;
  `}
`;

const ContentContainer = styled.div`
  background-image: linear-gradient(
    ${themeVal("color.surface")} 0%,
    ${themeVal("color.info-50")} 100%
  );
`;

const GradientWrapper = styled.div`
  background-image: linear-gradient(
    ${themeVal("color.info-50")} 0%,
    ${themeVal("color.info-100")} 60%,
    ${themeVal("color.surface")} 60%
  );
`;

const BottomContent = styled(Hug)``;

const InfoImageContent = styled.div`
  display: flex;
  flex-flow: row;
  background-color: #02225b; // @TODO: But where can I get this color?
  color: #ffffff;
  width: 100%;
  height: 300px;
  background-image: url(${RedEarthImg});
  background-position: right bottom -50px;
  background-repeat: no-repeat;
  div {
    display: flex;
    flex-flow: column;
    gap: ${glsp()};
    padding-left: ${glsp(3)};
    justify-content: center;
  }

  a {
    width: 18.5rem;
  }
  grid-column: full-start / full-end;
  ${media.largeUp`
    grid-column: content-2 / content-12;
    height: 350px;
  `}
`;

const CollaboratorsContent = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: ${glsp()};

  div {
    margin: 1rem auto;
  }

  span {
    color: ${themeVal("color.primary")};
  }

  p {
    text-align: center;
  }
`;
const HugP = styled(Hug)`
  > p {
    grid-column: full-start / full-end;
    ${media.largeUp`
      grid-column: content-2 / content-12;
    `}
  }
`;

export default function HomeComponent() {
  const description =
    "The Earth Information Center consolidates data and insights on how Earth is changing from across the U.S. federal government. Discover how this data is being used to prepare for climate change, and mitigate, adapt, and respond to environmental challenges accross the country.";
  return (
    <>
      <HomeDescription>
        <IntroHeadline>
          <IntroDesc>
            <StyledVarHeading size="xlarge" as="h1">
              Multiple agencies,
              <br /> many interconnected systems, <br />
              <span>one planet.</span>
            </StyledVarHeading>
            <p>{description}</p>
          </IntroDesc>
          <Partners size="small" top={4} />
        </IntroHeadline>
      </HomeDescription>
      <ContentContainer>
        <Fold>
          <FoldHeader>
            <FoldHeadline>
              <StyledVarHeading as="h2" size="large">
                Nine themes, one Earth
              </StyledVarHeading>
            </FoldHeadline>
            <FoldHeadActions>
              <Button
                forwardedAs={Link}
                to="/stories"
                size="medium"
                radius="square"
                variation="primary-fill"
              >
                View all themes
              </Button>
            </FoldHeadActions>
          </FoldHeader>

          <ThemeCards storyIds={themeLandingPageIds} />
        </Fold>
      </ContentContainer>
      <GradientWrapper>
        <Fold>
          <FoldBody>
            <HugP>
              <p>
                Earth.gov is also the gateway to other interagency cooperative
                efforts for our planet, like the{" "}
                <ExpandLink to={`https://earth.gov/ghgcenter`}>
                  {" "}
                  U.S. Greenhouse Gas Center
                </ExpandLink>
              </p>
            </HugP>
            <BottomContent>
              <InfoImageContent>
                <div>
                  <StyledVarHeading size="small" as="h2">
                    U.S. Greenhouse Gas Center
                  </StyledVarHeading>
                  <span>
                    Uniting Data and Technology to Empower Tomorrow's Climate
                    Solutions
                  </span>
                  <Button
                    forwardedAs="a"
                    href="https://earth.gov/ghgcenter"
                    size="medium"
                    radius="square"
                    variation="primary-fill"
                  >
                    Visit the U.S. GHG Center website
                  </Button>
                </div>
              </InfoImageContent>
            </BottomContent>
          </FoldBody>
        </Fold>
      </GradientWrapper>
      <Fold>
        <FoldBody>
          <CollaboratorsContent>
            <StyledVarHeading size="small" as="h2">
              Joining forces <span>for a better tomorrow</span>
            </StyledVarHeading>
            <p>
              The Earth Information Center is grateful for the support and
              expertise of our valued, multi-agency collaborators: NASA, EPA, FEMA,
              NOAA, USAID, USDA, and USGS.
            </p>
            <Partners size="small" />
            <Button
              forwardedAs="a"
              href="/about"
              size="medium"
              radius="square"
              variation="primary-fill"
            >
              Learn more
            </Button>
          </CollaboratorsContent>
        </FoldBody>
      </Fold>
    </>
  );
}
