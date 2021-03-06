import React from 'react';
import { Icon } from 'antd';

import { OnboardingData } from '@generated/client';
import ExternalLink from '@components/ExternalLink';

import { StyledCards, StyledCard } from '../styles';

type OnboardingProps = {
  onboardingData: OnboardingData;
};

const Onboarding = ({ onboardingData }: OnboardingProps) => {
  let actions = [
    <ExternalLink href={onboardingData.url}>Foo</ExternalLink>,
  ];

  return (
    <StyledCards>
      <StyledCard
        title={
          <>
            <Icon type="star" /> {onboardingData.label}
          </>
        }
        actions={actions}
      >
        {onboardingData.description}
      </StyledCard>
    </StyledCards>
  );
};

export default Onboarding;
