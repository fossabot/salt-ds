import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, FlowLayout, Panel } from "@salt-ds/core";
import { CircularProgress, LinearProgress } from "@salt-ds/lab";
import { useProgressingValue } from "./useProgressingValue";

import "./progress.stories.css";

export default {
  title: "Lab/Progress/Circular",
  component: LinearProgress,
} as ComponentMeta<typeof LinearProgress>;

interface ProgressWithControlsProps {
  ProgressComponent: typeof CircularProgress | typeof LinearProgress;
}

const ProgressWithControls = ({
  ProgressComponent: Progress,
}: ProgressWithControlsProps) => {
  const { handleReset, handleStart, handleStop, isProgressing, value } =
    useProgressingValue();
  return (
    <div className="root">
      <FlowLayout gap={1} className="controls">
        <Button disabled={isProgressing} onClick={handleStart}>
          Start
        </Button>
        <Button disabled={!isProgressing} onClick={handleStop}>
          Stop
        </Button>
        <Button onClick={handleReset}>Reset</Button>
      </FlowLayout>
      <Progress aria-label="Download" value={value} />
    </div>
  );
};

export const Default: ComponentStory<typeof CircularProgress> = () => (
  <CircularProgress aria-label="Download" value={38} />
);

export const Disabled: ComponentStory<typeof CircularProgress> = () => (
  <CircularProgress aria-label="Download" disabled value={38} />
);

export const MaxValue: ComponentStory<typeof CircularProgress> = () => (
  <div>
    <h3> max = 500, value = 250</h3>
    <CircularProgress aria-label="Download" value={250} max={500} />
  </div>
);

export const ProgressingValue: ComponentStory<typeof CircularProgress> = () => (
  <ProgressWithControls ProgressComponent={CircularProgress} />
);

export const ShowNoInfo: ComponentStory<typeof CircularProgress> = () => (
  <CircularProgress aria-label="Download" showInfo={false} value={38} />
);

export const Unit: ComponentStory<typeof CircularProgress> = () => (
  <CircularProgress aria-label="Download" unit="px" value={38} />
);
