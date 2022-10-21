export type PageContainerProps = {
  children: React.ReactNode;
};

const PageContainer = ({ children }: PageContainerProps): JSX.Element => {
  return <div>{children}</div>;
};

export default PageContainer;
