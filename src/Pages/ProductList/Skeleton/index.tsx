import React from "react";
import { Container } from "./styles";
import Skeleton from "@mui/material/Skeleton";

const SkeletonProductList: React.FC = () => {
  return (
    <Container>
      <Skeleton variant="rectangular" width={217} height={285} />
      <Skeleton variant="rectangular" width={217} height={285} />
      <Skeleton variant="rectangular" width={217} height={285} />
      <Skeleton variant="rectangular" width={217} height={285} />
      <Skeleton variant="rectangular" width={217} height={285} />
      <Skeleton variant="rectangular" width={217} height={285} />
      <Skeleton variant="rectangular" width={217} height={285} />
      <Skeleton variant="rectangular" width={217} height={285} />
    </Container>
  );
};

export default SkeletonProductList;
