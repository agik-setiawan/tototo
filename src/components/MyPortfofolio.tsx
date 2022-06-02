import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
    {
        label: 'NulisCv.com',
        description: `<a href="www.nuliscv.com">NulisCV.com</a> is my own website who peoples can create CV/Resume for easly. I build it with NextJS, NestJS, MongoDB, React JS, and another framework like tailwindcss, redux`,
    },
    {
        label: 'Career Days (Virtual Jobfair) Trisakti University',
        description:
            '<a href="https://www.cedtsm.com">www.cedtsm.com</a> is virtual jobfair website, I build these website using Next JS, React, Redux for frontend and Laravel for Backend',
    },
    {
        label: 'Biznetwifi (Biznetnetworks)',
        description: `<a href="https://www.biznetwifi.com/">www.biznetwifi.com/</a> is partal website for connecting between customer to internet with accesspoint biznet`,
    },
    {
        label: 'Intranet (Biznetnetworks)',
        description: `Intranet is internal system in Biznetnetworks`,
    },
    {
        label: 'Web reseller System',
        description: `<a href="https://skies.co.id/">skies.co.id</a> is reseller website for membership. these website contain many stack like payment gateway (use Midtrans), disburshment system (sse Midtrans). for frontend, I use Vue JS and backend user Laravel, databse use MySQL and Redis for cache`,
    },
    {
        label: 'Landing page related with skies.co.id',
        description: `<a href="https://lariso.skiesmart.co.id/">lariso.skiesmart.co.id</a> is landing page that related with skies.co.id. each member will be have one landing page based on member username. for frontend, I use Vue JS and backend user Laravel that related with skies API`,
    },
    {
        label: 'Online Exams Event (Trisakti University)',
        description: `<a href="https://youtu.be/hhTPBWP69P0">Online Exams Event (Trisakti University)</a> is online exams website for Trisakti University. for frontend, I use Vue JS and backend user Laravel and use Websocket for realtime`,
    },
    {
        label: 'E-Recruitment System (PT Petrolab Services)',
        description: `<a href="https://recruitment.petrolab.co.id/">recruitment.petrolab.co.id/</a> is E-Recruitment system for PT Petrolab Services. People can apply jobs on these website. Stack : Yii2 and Vue JS`,
    },
    {
        label: 'HSE System (PT Petrolab Services)',
        description: `<a href="https://hse.petrolab.co.id/">hse.petrolab.co.id</a> is Exams test for each Pertolab employee. Stack : Yii2 and Vue JS`,
    },
];

export default function MyPortofolio() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label} active={true}>
                        <StepLabel>
                            {step.label}
                        </StepLabel>
                        <StepContent>
                            <Typography dangerouslySetInnerHTML={{ __html: step.description }}></Typography>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}
