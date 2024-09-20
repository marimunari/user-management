import styled from "styled-components";

interface ContainerProps {
  type: "success" | "error";
}

export const NotificationContainer = styled.div<ContainerProps>`
  width: 200px;
  height: 20px;
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: ${({ type }) =>
    type === "success" ? "#d4edda" : "#f8d7da"};
  color: ${({ type }) => (type === "success" ? "#155724" : "#721c24")};
  padding: 15px;
  border: 1px solid
    ${({ type }) => (type === "success" ? "#c3e6cb" : "#f5c6cb")};
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  animation: fade-in 0.5s ease-in-out;

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const NotificationMessage = styled.p`
  margin: 0;
  display: inline-block;
`;
