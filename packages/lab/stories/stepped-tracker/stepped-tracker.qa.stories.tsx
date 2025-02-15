import { SteppedTracker, TrackerStep, StepLabel } from "@salt-ds/lab";
import { StackLayout } from "@salt-ds/core";
import { ComponentMeta, Story } from "@storybook/react";
import { QAContainer, QAContainerProps } from "docs/components";

export default {
  title: "Lab/Stepped Tracker/QA",
  component: SteppedTracker,
  subcomponents: { TrackerStep, StepLabel },
} as ComponentMeta<typeof SteppedTracker>;

export const Basic: Story<QAContainerProps> = (props) => {
  return (
    <QAContainer height={500} width={1000} {...props}>
      <StackLayout
        direction="column"
        align="stretch"
        gap={2}
        style={{
          minWidth: 450,
          marginBottom: 50,
        }}
      >
        <SteppedTracker activeStep={0}>
          <TrackerStep>
            <StepLabel>Step One</StepLabel>
          </TrackerStep>
          <TrackerStep>
            <StepLabel>Step Two</StepLabel>
          </TrackerStep>
          <TrackerStep>
            <StepLabel>Step Three</StepLabel>
          </TrackerStep>
          <TrackerStep>
            <StepLabel>Step Four</StepLabel>
          </TrackerStep>
        </SteppedTracker>
        <SteppedTracker activeStep={2}>
          <TrackerStep state="completed">
            <StepLabel>Step One</StepLabel>
          </TrackerStep>
          <TrackerStep state="completed">
            <StepLabel>Step Two</StepLabel>
          </TrackerStep>
          <TrackerStep state="default">
            <StepLabel>Step Three</StepLabel>
          </TrackerStep>
          <TrackerStep state="default">
            <StepLabel>Step Four</StepLabel>
          </TrackerStep>
        </SteppedTracker>
        <SteppedTracker activeStep={3}>
          <TrackerStep state="completed">
            <StepLabel>Step One</StepLabel>
          </TrackerStep>
          <TrackerStep state="completed">
            <StepLabel>Step Two</StepLabel>
          </TrackerStep>
          <TrackerStep state="completed">
            <StepLabel>Step Three</StepLabel>
          </TrackerStep>
          <TrackerStep state="completed">
            <StepLabel>Step Four</StepLabel>
          </TrackerStep>
        </SteppedTracker>
      </StackLayout>
    </QAContainer>
  );
};

Basic.parameters = {
  chromatic: { disableSnapshot: false },
};
