type TImageProps = {
  src: string;
  style: React.CSSProperties;
};

function TImage(props: TImageProps) {
  return <img {...props} />;
}

export default TImage;
