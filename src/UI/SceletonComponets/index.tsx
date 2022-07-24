import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonComponent = (props: any) => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={200}
      viewBox="0 0 312 200"
      backgroundColor="#808080"
      foregroundColor="#dedede"
      opacity={0.1}
      {...props}
    >
      <rect x="5" y="10" rx="25" ry="25" width="306" height="167" />
    </ContentLoader>
  );
};

export default SkeletonComponent;
