import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  height: 85vh;
  background: linear-gradient(
      to top,
      rgb(0 0 0 / 90%) 0,
      rgb(0 0 0 / 20%) 60%,
      rgb(0 0 0 / 90%) 100%
    ),
    url("/images/misc/Home_Banner.jpg");
  background-size: cover;
  background-position: 50% 50%;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 0 0 1.5rem;
`;

export const Inner = styled.div`
  background: rgba(0, 0, 0, 0.75);
  max-width: 20rem;
  margin: auto;
  padding: 3.5rem 4.5rem 5.5rem;
  color: #fff;
  border-radius: 0.25rem;
`;
