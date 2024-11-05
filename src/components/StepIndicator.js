import styled, { keyframes, css } from "styled-components";

const IndicatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const bounce = keyframes`
  0% { transform: translateY(0); }
  30% { transform: translateY(-15px); }
  50% { transform: translateY(0); }
  70% { transform: translateY(-8px); }
  100% { transform: translateY(0); }
`;

const getDotStyles = (props) => css`
  height: 0.5rem;
  width: ${props.isActive ? "1.5rem" : "0.5rem"};
  background-color: ${props.isActive ? props.activeColor : "#9CA3AF"};
  border-radius: ${props.isActive ? "0.375rem" : "50%"};
  cursor: pointer;

  animation: ${props.isActive
    ? css`
        ${bounce} 0.6s ease
      `
    : "none"};
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
