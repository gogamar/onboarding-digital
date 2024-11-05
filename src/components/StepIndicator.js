import styled from "styled-components";

const IndicatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const getDotStyles = (props) => `
  height: 0.5rem;
  width: ${props.isActive ? "1.5rem" : "0.5rem"};
  background-color: ${props.isActive ? props.activeColor : "#9CA3AF"}; /* Use activeColor from props */
  border-radius: ${props.isActive ? "0.375rem" : "50%"};
  cursor: pointer;

`;

const StepIndicatorDot = styled.div`
  ${getDotStyles}
`;

export default function StepIndicator({ steps, currentStep, onDotClick }) {
  return (
    <IndicatorContainer>
      {steps.map((step, index) => (
        <StepIndicatorDot key={index} isActive={index === currentStep} activeColor={step.bgHex} onClick={() => onDotClick(index)} />
      ))}
    </IndicatorContainer>
  );
}
