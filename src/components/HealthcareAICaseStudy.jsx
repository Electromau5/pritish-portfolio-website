import React from 'react';
import CaseStudyCarousel from './CaseStudyCarousel';
import { healthcareAICaseStudy } from '../data/healthcareAICaseStudy';

const HealthcareAICaseStudy = ({ onBack }) => {
    return (
        <CaseStudyCarousel
            caseStudyData={healthcareAICaseStudy}
            onBack={onBack}
            accentColor="blue"
        />
    );
};

export default HealthcareAICaseStudy;